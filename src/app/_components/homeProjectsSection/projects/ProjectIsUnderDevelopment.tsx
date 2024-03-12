import React from "react";
import { cn } from "@/lib/utils";

const ProjectIsUnderDevelopment = () => {
    return (
        <p className={cn("font-medium", "px-3 py-3", "text-lg")}>
            Website is under development
        </p>
    );
};

export default ProjectIsUnderDevelopment;
