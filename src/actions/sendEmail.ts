"use server";

import ContactFormEmail from "@/emails/ContactFormEmail";
import { type FormFields } from "@/app/_components/homeContactSection/contactForm/ContactForm";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactRequestEmail = async (data: FormFields) => {
    const { email, message, name } = data;

    try {
        const res = await resend.emails.send({
            from:
                process.env.NODE_ENV === "development"
                    ? "Contact Request <onboarding@resend.dev>"
                    : "Contact Request <hireme@itswillis.dev>",
            to: "hireme@itswillis.dev",
            subject: `${name} is reaching out`,
            html: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: React.createElement(ContactFormEmail, { ...data }),
            reply_to: email,
        });

        console.log("Data: ", res.data);
        console.log("Error: ", res.error);

        if (!res.data?.id) throw new Error("Could not send email!");
    } catch (error) {
        console.log(error);
    }
};
