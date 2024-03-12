import ReCAPTCHA from "react-google-recaptcha";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";
import { verifyToken } from "@/actions/recaptcha";

type RecaptchaState = {
    message: string;
    success: boolean | undefined;
};

const useRecaptcha = (recaptchaRef: React.RefObject<ReCAPTCHA>) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [recaptchaResponse, setRecaptchaResponse] = useState<RecaptchaState>({
        message: "",
        success: undefined,
    });

    const handleRecaptcha = async () => {
        if (!executeRecaptcha) {
            console.log("Execute recaptcha is not available");
            return;
        }

        try {
            const gRecaptchTokenV2 = recaptchaRef?.current?.getValue();
            const gRecaptchaTokenV3 = await executeRecaptcha("messageSubmit");

            if (gRecaptchTokenV2 && gRecaptchaTokenV3) {
                const resV2 = await verifyToken(gRecaptchTokenV2, "v2");
                const resV3 = await verifyToken(gRecaptchaTokenV3, "v3");

                if (resV2.success && resV3.success) {
                    setRecaptchaResponse({
                        message: "ReCaptcha Verified! Message sent.",
                        success: true,
                    });

                    return {
                        success: true,
                    };
                }

                setRecaptchaResponse({
                    message: "Failed to verify recaptcha",
                    success: false,
                });
            }
            setRecaptchaResponse({
                message: "You must check the reCAPTCHA box",
                success: false,
            });

            return {
                success: false,
            };
        } catch (error) {
            setRecaptchaResponse({
                message: "Something went wrong",
                success: false,
            });
            return {
                error,
            };
        }
    };

    return {
        recaptchaResponse,
        handleRecaptcha,
        setRecaptchaResponse,
    };
};

export default useRecaptcha;
