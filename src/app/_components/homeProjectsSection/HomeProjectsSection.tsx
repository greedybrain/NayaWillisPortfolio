import AppSection from "../0_common/AppSection";
// import FixedWidthContainer from "../FixedWidthContainer";
import ProjectVideoDemo from "./projectVideo/ProjectVideoDemo";
import React from "react";
import { cn } from "@/lib/utils";

const HomeProjectsSection = () => {
    return (
        <AppSection className={cn("bg-[#b9f7bf] border-b-2 border-b-black")}>
            {/* <FixedWidthContainer>
            </FixedWidthContainer> */}
            {/* <ProjectVideoDemo src="/assets/videos/aipg-demo.mp4" /> */}
        </AppSection>
    );
};

export default HomeProjectsSection;
