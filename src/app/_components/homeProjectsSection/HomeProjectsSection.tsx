import AppSection from "../0_common/AppSection";
import FixedWidthContainer from "../FixedWidthContainer";
import Projects from "./projects/Projects";
import React from "react";
import RepeatTitle from "../repeatTitle/RepeatTitle";
import { cn } from "@/lib/utils";

const HomeProjectsSection = () => {
    return (
        <AppSection id="projects">
            <FixedWidthContainer
                className={cn(
                    "bg-quatenary border-b border-black",
                    "lg:border-l lg:border-r",
                )}
            >
                {/* <RepeatTitle titleToRepeat="FEATURED PROJECTS" /> */}
                <Projects />
            </FixedWidthContainer>
        </AppSection>
    );
};

export default HomeProjectsSection;
