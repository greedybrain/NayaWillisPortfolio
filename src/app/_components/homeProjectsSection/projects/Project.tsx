import AppText from "../../0_common/AppText";
import { FaExternalLinkAlt } from "react-icons/fa";
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
            <div
                className={cn("border-t-2 border-b-2 border-black", {
                    "border-t-0": isFirstVideo,
                })}
            >
                <ProjectVideoDemo src={demo} />
            </div>
            <div className={cn("px-5 py-10")}>
                <h2 className={cn("font-medium", "text-2xl", "underline")}>
                    {name}
                </h2>
                <AppText className={cn("font-light", "mt-5", "text-lg")}>
                    {description}
                </AppText>
                <div
                    className={cn(
                        "border-2 border-black bg-primary",
                        "inline-block",
                        "mt-5",
                        "rounded-lg",
                        "shadow-neo-sm",
                    )}
                >
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={cn(
                                "font-medium flex",
                                "gap-x-3",
                                "items-center",
                                "p-3",
                            )}
                        >
                            <span className={cn("inline-block", "text-lg")}>
                                Check it out
                            </span>
                            <div>
                                <FaExternalLinkAlt size={18} />
                            </div>
                        </a>
                    ) : (
                        <p className={cn("px-3 py-3", "text-lg")}>
                            Website is under development
                        </p>
                    )}
                </div>
            </div>
        </li>
    );
};

export default Project;
