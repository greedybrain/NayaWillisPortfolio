import {
    Body,
    Container,
    Font,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Img,
} from "@react-email/components";

import React from "react";
import { Tailwind } from "@react-email/tailwind";
import { cn } from "@/lib/utils";
import { type FormFields } from "@/app/_components/homeContactSection/contactForm/ContactForm";

const tailwindConfigs = {
    theme: {
        extend: {
            colors: {
                primary: "#dac5f7",
                secondary: "#b9f7bf",
                tertiary: "#FADE5A",
                quatenary: "#fabfe2",
            },
            boxShadow: {
                "neo-xs": "2px 2px 0 0 #000000",
                "neo-sm": "4px 4px 0 0 #000000",
                "neo-md": "5px 5px 0 0 #000000",
                "neo-lg": "6px 6px 0 0 #000000",
                "neo-xl": "7px 7px 0 0 #000000",
            },
        },
    },
};

const ContactFormEmail = ({ email, name, message }: FormFields) => {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Montserrat"
                    fallbackFontFamily="Helvetica"
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>You have a new message</Preview>
            <Tailwind config={tailwindConfigs}>
                <Body>
                    <Container className={cn("mt-5")}>
                        <div
                            className={cn(
                                "bg-primary",
                                "py-5 px-4",
                                "rounded-md",
                                "shadow-neo-lg",
                            )}
                        >
                            <div className={cn("flex", "justify-center")}>
                                <Img
                                    src="https://mepjqyejyketnjhgffwm.supabase.co/storage/v1/object/public/Avatars/naya-willis-black-and-white-v6.png"
                                    alt="avatar"
                                    width={100}
                                    height={125}
                                />
                            </div>
                            <Heading
                                className={cn(
                                    "font-semibold",
                                    "text-2xl text-black/50 text-center",
                                )}
                            >
                                {"ItsWillis.Dev"}
                            </Heading>
                            <Hr className={cn("border border-black/50")} />
                            <Section className={cn("text-center")}>
                                <Text
                                    className={cn(
                                        "text-center text-lg text-black/50",
                                    )}
                                >
                                    {name} has the following message:
                                    <br />
                                    <br />
                                    {'"'}
                                    {message}
                                    {'"'}
                                    <br />
                                    <br />- Reply to {name}
                                    {"'s"} message at:
                                </Text>
                                <Link
                                    className={cn(
                                        "bg-tertiary",
                                        "inline-block",
                                        "px-6 py-3",
                                        "rounded-lg",
                                        "shadow-neo-md",
                                        "text-black",
                                    )}
                                    href={`mailto:${email}`}
                                >
                                    {email}
                                </Link>
                            </Section>
                        </div>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactFormEmail;
