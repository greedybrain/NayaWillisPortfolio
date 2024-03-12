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
        <AppSection
            id="contact"
            className={cn("bg-primary border-b-2 border-b-black")}
        >
            <RepeatTitle titleToRepeat="CONTACT ME" />
            <FixedWidthContainer>
                <div className={cn("py-12")}>
                    <ContactHeading />
                    <div className={cn("mt-5")}>
                        <ContactCTA />
                    </div>
                    <ContactForm />
                </div>
            </FixedWidthContainer>
        </AppSection>
    );
};

export default HomeContactSection;
