import React from "react";
import { cn } from "@/lib/utils";

interface ProjectVideoDemoProps {
    src: string;
    isFirstVideo: boolean;
}

const ProjectVideoDemo = ({ src, isFirstVideo }: ProjectVideoDemoProps) => {
    return (
        <div
            className={cn("border-t-2 border-b-2 border-black", {
                "border-t-0": isFirstVideo,
            })}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className={cn("h-auto", "w-full")}
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
};

export default ProjectVideoDemo;
