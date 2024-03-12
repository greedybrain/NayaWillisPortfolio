import React, { SetStateAction } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import { cn } from "@/lib/utils";

interface ReCaptchaV2Props {
    recaptchaV2Ref: React.RefObject<ReCAPTCHA>;
    setRecaptcha: React.Dispatch<SetStateAction<string | null | undefined>>;
}

const ReCaptchaV2 = ({ recaptchaV2Ref, setRecaptcha }: ReCaptchaV2Props) => {
    return (
        <ReCAPTCHA
            ref={recaptchaV2Ref}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_V2_CLIENT_KEY!}
            onChange={setRecaptcha}
            className={cn("mt-3")}
        />
    );
};

export default ReCaptchaV2;
