"use server";

import axios from "axios";

export const verifyToken = async (
    gRecaptchaToken: string,
    versionToVerify: "v2" | "v3",
) => {
    const secretKey =
        versionToVerify === "v2"
            ? process.env.RECAPTCHA_V2_SECRET_KEY
            : process.env.RECAPTCHA_V3_SECRET_KEY;

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
        const res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            },
        );

        if (res && res.data?.success) {
            if (
                versionToVerify === "v2" ||
                typeof res.data?.score === "undefined"
            ) {
                return {
                    success: true,
                    message: `Checkbox checked`,
                };
            }

            const score = res.data.score;
            if (score > 0.5) {
                return {
                    success: true,
                    message: `Success with score: ${score}`,
                };
            } else {
                return {
                    success: false,
                    message: `Failed with score: ${score}`,
                };
            }
        }

        return {
            success: false,
            message: "Failed to verify reCAPTCHA",
        };
    } catch (error) {
        return {
            error,
            success: false,
        };
    }
};
