import AppSection from "../0_common/AppSection";
import ContactCTA from "../homeContactSection/contactCTA/ContactCTA";
import ContactForm from "../homeContactSection/contactForm/ContactForm";
import ContactHeading from "../homeContactSection/contactHeading/ContactHeading";
import FixedWidthContainer from "../FixedWidthContainer";
import React from "react";
import RepeatTitle from "../repeatTitle/RepeatTitle";
import { cn } from "@/lib/utils";

const HomeTeamSection = () => {
    return (
        <AppSection id="team">
            <FixedWidthContainer
                className={cn(
                    "bg-primary border-b-2 border-black",
                    "lg:border-l-2 lg:border-r-2",
                    // "px-5",
                )}
            >
                <RepeatTitle titleToRepeat="MEET THE TEAM" />
                <div
                    className={cn(
                        "flex flex-col",
                        "items-center",
                        "lg:px-0",
                        "px-5 py-12",
                    )}
                >
                    TEAM SECTION
                </div>
            </FixedWidthContainer>
        </AppSection>
    );
};

export default HomeTeamSection;
