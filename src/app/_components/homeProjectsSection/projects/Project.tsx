import AppText from "../../0_common/AppText";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectDescription from "./ProjectDescription";
import ProjectIsUnderDevelopment from "./ProjectIsUnderDevelopment";
import ProjectLink from "./ProjectLink";
import ProjectName from "./ProjectName";
import { ProjectType } from "./types";
import ProjectVideoDemo from "../projectVideos/ProjectVideoDemo";
import React from "react";
import { cn } from "@/lib/utils";

const Project = ({
    name,
    demo,
    description,
    index,
    link,
}: ProjectType & { index: number }) => {
    return (
        <li
            className={cn(
                "border-t-2 border-black",
                "lg:flex lg:even:flex-row-reverse",
                {
                    "border-t-0": index === 0,
                },
            )}
        >
            <ProjectVideoDemo src={demo} index={index} />
            <div
                className={cn("lg:w-1/2", "px-5 py-10", {
                    "bg-[#fff3b6]": index % 2 === 0,
                })}
            >
                <ProjectName name={name} />
                <ProjectDescription description={description} />
                <div
                    className={cn(
                        "border-2 border-black bg-primary",
                        "inline-block",
                        "rounded-lg",
                        "shadow-neo-sm",
                    )}
                >
                    {link ? (
                        <ProjectLink link={link} />
                    ) : (
                        <ProjectIsUnderDevelopment />
                    )}
                </div>
            </div>
        </li>
    );
};

export default Project;
