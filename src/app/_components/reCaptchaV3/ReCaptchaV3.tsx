"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

const ReCaptchaV3 = ({ children }: { children: React.ReactNode }) => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_V3_CLIENT_KEY!}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
};

export default ReCaptchaV3;
