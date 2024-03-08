import AboutExpertiseDescription from "./aboutExpertiseDescription/AboutExpertiseDescription";
import AboutIntroduction from "./aboutIntroduction/AboutIntroduction";
import AboutPersonalInterestsDescription from "./aboutPersonalInterestsDescription/AboutPersonalInterestsDescription";
import AboutTitle from "./aboutTitle/AboutTitle";
import AppSection from "../0_common/AppSection";
import FixedWidthContainer from "../FixedWidthContainer";
import React from "react";
import { cn } from "@/lib/utils";

const HomeAboutSection = () => {
    return (
        <AppSection className={cn("bg-[#b9f7bf] border-b-2 border-b-black")}>
            <FixedWidthContainer>
                <div className={cn("py-12")}>
                    <AboutIntroduction />
                    <AboutTitle />
                    <div className={cn("max-w-[750px]")}>
                        <AboutExpertiseDescription />
                        <AboutPersonalInterestsDescription />
                    </div>
                </div>
            </FixedWidthContainer>
        </AppSection>
    );
};

export default HomeAboutSection;