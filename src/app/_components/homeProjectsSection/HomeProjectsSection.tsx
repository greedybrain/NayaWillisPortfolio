import AppSection from "../0_common/AppSection";
import Projects from "./projects/Projects";
import React from "react";
import RepeatTitle from "../repeatTitle/RepeatTitle";
import { cn } from "@/lib/utils";

const HomeProjectsSection = () => {
    return (
        <AppSection
            id="projects"
            className={cn("bg-quatenary border-b-2 border-b-black")}
        >
            <RepeatTitle titleToRepeat="FEATURED PROJECTS" />
            <Projects />
        </AppSection>
    );
};

export default HomeProjectsSection;
