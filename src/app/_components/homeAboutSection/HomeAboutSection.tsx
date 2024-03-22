import AboutExpertiseDescription from "./aboutExpertiseDescription/AboutExpertiseDescription";
import AboutIntroduction from "./aboutIntroduction/AboutIntroduction";
import AboutPersonalInterestsDescription from "./aboutPersonalInterestsDescription/AboutPersonalInterestsDescription";
import AboutTitle from "./aboutTitle/AboutTitle";
import AppSection from "../0_common/AppSection";
import FixedWidthContainer from "../FixedWidthContainer";
import React from "react";
import RepeatTitle from "../repeatTitle/RepeatTitle";
import { cn } from "@/lib/utils";

const HomeAboutSection = () => {
    return (
        <AppSection id="about">
            <FixedWidthContainer
                className={cn(
                    "bg-secondary border-b border-black",
                    "lg:border-l lg:border-r",
                    // "px-5",
                )}
            >
                {/* <RepeatTitle titleToRepeat="ABOUT ME" /> */}
                <div
                    className={cn(
                        "flex flex-col",
                        "lg:items-center lg:py-14 lg:px-0",
                        "px-5 py-12",
                    )}
                >
                    <div>
                        <AboutIntroduction />
                        <AboutTitle />
                        <div className={cn("max-w-[750px]")}>
                            <AboutExpertiseDescription />
                            <AboutPersonalInterestsDescription />
                        </div>
                    </div>
                </div>
            </FixedWidthContainer>
        </AppSection>
    );
};

export default HomeAboutSection;
