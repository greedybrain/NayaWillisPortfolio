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
                <h2
                    className={cn(
                        "border-2 border-black bg-secondary",
                        "font-bold",
                        "inline-block",
                        "py-3 px-6",
                        "rounded-lg -rotate-3",
                        "shadow-neo-md",
                        "text-2xl",
                    )}
                >
                    {name}
                </h2>
                <AppText className={cn("font-light", "my-10", "text-lg")}>
                    {description}
                </AppText>
                <div
                    className={cn(
                        "border-2 border-black bg-primary",
                        "inline-block",
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
                        <p
                            className={cn(
                                "font-medium",
                                "px-3 py-3",
                                "text-lg",
                            )}
                        >
                            Website is under development
                        </p>
                    )}
                </div>
            </div>
        </li>
    );
};

export default Project;
