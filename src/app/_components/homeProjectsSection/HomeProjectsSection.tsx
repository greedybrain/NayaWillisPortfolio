import AppSection from "../0_common/AppSection";
import Projects from "./projects/Projects";
import React from "react";
// import FixedWidthContainer from "../FixedWidthContainer";
import { cn } from "@/lib/utils";

const HomeProjectsSection = () => {
    const renderRepeatTitle = () => {
        let title = "";
        for (let i = 0; i < 10; i++) {
            title += "Featured Projects\t\t";
        }
        return title;
    };

    return (
        <AppSection className={cn("bg-[#fabfe2] border-b-2 border-b-black")}>
            {/* <FixedWidthContainer>
            </FixedWidthContainer> */}
            <div
                className={cn(
                    "bg-black",
                    "flex",
                    "gap-10",
                    "h-[60px]",
                    "items-center",
                    "overflow-hidden",
                )}
            >
                <p
                    className={cn(
                        "flex font-medium",
                        "items-center",
                        "px-5",
                        "text-center text-nowrap text-xl text-white",
                        "whitespace-pre-wrap",
                    )}
                >
                    {renderRepeatTitle()}
                </p>
            </div>
            <Projects />
        </AppSection>
    );
};

export default HomeProjectsSection;
