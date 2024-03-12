"use client";

import React, { useRef, useState } from "react";

import AppText from "../../0_common/AppText";
import ReCAPTCHA from "react-google-recaptcha";
import ReCaptchaV2 from "../../recaptchaV2/ReCaptchaV2";
import { cn } from "@/lib/utils";
import { sendContactRequestEmail } from "@/actions/sendEmail";
import { useForm } from "react-hook-form";
import useRecaptcha from "@/hooks/useRecaptcha";

export type FormFields = {
    name: string;
    email: string;
    message: string;
};

const inputStyles = cn(
    "border-2 border-black",
    "h-[60px]",
    "mt-2",
    "pl-3",
    "rounded-lg",
    "shadow-neo-sm",
    "text-lg",
);

const errorStyles = cn("text-red-500");

const ContactForm = () => {
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // ReCaptcha related
    const recaptchaV2Ref = useRef<ReCAPTCHA>(null);
    const [recaptcha, setRecaptcha] = useState<string | null>();
    const { recaptchaResponse, handleRecaptcha, setRecaptchaResponse } =
        useRecaptcha(recaptchaV2Ref);

    const onSubmit = async (data: FormFields) => {
        try {
            const res = await handleRecaptcha();
            console.log("Res: ", res);
            if (!res?.success || !recaptcha) return;

            await sendContactRequestEmail(data);

            reset();
            recaptchaV2Ref.current?.reset();

            setTimeout(() => {
                setRecaptchaResponse({ message: "", success: undefined });
            }, 1500);
        } catch (error) {
            console.log("Error: ", error);
            return;
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("flex flex-col", "mt-10")}
        >
            <label htmlFor="name" className={cn("font-medium", "text-lg")}>
                Full name
            </label>
            <input
                {...register("name", {
                    required: { value: true, message: "Name is required" },
                })}
                type="text"
                id="name"
                placeholder="Enter your full name"
                className={inputStyles}
            />
            <AppText className={cn("my-2", errorStyles)}>
                {errors.name?.message}
            </AppText>
            <label htmlFor="email" className={cn("font-medium", "text-lg")}>
                Email
            </label>
            <input
                {...register("email", {
                    required: { value: true, message: "Email is required" },
                })}
                type="email"
                id="email"
                placeholder="Enter your email"
                className={inputStyles}
            />
            <AppText className={cn("my-2", errorStyles)}>
                {errors.email?.message}
            </AppText>
            <label htmlFor="message" className={cn("font-medium", "text-lg")}>
                Message
            </label>
            <textarea
                {...register("message", {
                    required: { value: true, message: "A message is required" },
                })}
                id="message"
                placeholder="Hey Willis, I have something special that I'm working on, and can use your help!"
                className={cn(
                    "border-2 border-zinc-900",
                    "mt-2",
                    "p-3",
                    "rounded-lg resize-none",
                    "shadow-neo-sm",
                    "text-lg",
                )}
                rows={5}
            />
            <AppText className={cn("my-2", errorStyles)}>
                {errors.message?.message}
            </AppText>
            <ReCaptchaV2
                recaptchaV2Ref={recaptchaV2Ref}
                setRecaptcha={setRecaptcha}
            />
            <button
                className={cn(
                    "border-2 border-black bg-quatenary",
                    "font-medium",
                    "h-[60px] hover:bg-quatenary/50",
                    "mt-5",
                    "py-3",
                    "rounded-lg",
                    "shadow-neo-sm",
                    "text-lg",
                )}
            >
                {"Let's chat"}
            </button>
            <AppText
                className={cn("font-medium", "mt-2", "text-center", {
                    "text-red-500": !recaptchaResponse.success,
                    "text-green-500": recaptchaResponse.success,
                })}
            >
                {recaptchaResponse.message}
            </AppText>
        </form>
    );
};

export default ContactForm;
