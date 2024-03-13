import AppSection from "../0_common/AppSection";
import ContactCTA from "./contactCTA/ContactCTA";
import ContactForm from "./contactForm/ContactForm";
import ContactHeading from "./contactHeading/ContactHeading";
import FixedWidthContainer from "../FixedWidthContainer";
import React from "react";
import RepeatTitle from "../repeatTitle/RepeatTitle";
import { cn } from "@/lib/utils";

const HomeContactSection = () => {
    return (
        <AppSection id="contact">
            <FixedWidthContainer
                className={cn(
                    "bg-primary border-b-2 border-black",
                    "lg:border-l-2 lg:border-r-2",
                    // "px-5",
                )}
            >
                <RepeatTitle titleToRepeat="CONTACT ME" />
                <div
                    className={cn(
                        "flex flex-col",
                        "items-center",
                        "lg:px-0",
                        "px-5 py-12",
                    )}
                >
                    <div className={cn("max-w-[560px]")}>
                        <ContactHeading />
                        <div className={cn("mt-5")}>
                            <ContactCTA />
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </FixedWidthContainer>
        </AppSection>
    );
};

export default HomeContactSection;
