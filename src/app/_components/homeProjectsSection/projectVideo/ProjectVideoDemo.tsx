import React from "react";
import { cn } from "@/lib/utils";

interface ProjectVideoDemoProps {
    src: string;
}

const ProjectVideoDemo = ({ src }: ProjectVideoDemoProps) => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className={cn("h-auto", "w-full")}
        >
            <source src={src} type="video/mp4" />
        </video>
    );
};

export default ProjectVideoDemo;
