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
    const isFirstVideo = index === 0;

    return (
        <li>
            <ProjectVideoDemo src={demo} isFirstVideo={isFirstVideo} />
            <div
                className={cn("px-5 py-10", {
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
