import AppText from "../../0_common/AppText";
import { ProjectType } from "./types";
import ProjectVideoDemo from "../projectVideos/ProjectVideoDemo";
import React from "react";
import { cn } from "@/lib/utils";

const Project = ({
    demo,
    description,
    index,
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
                <AppText className={cn("font-light", "text-lg")}>
                    {description}
                </AppText>
            </div>
        </li>
    );
};

export default Project;
