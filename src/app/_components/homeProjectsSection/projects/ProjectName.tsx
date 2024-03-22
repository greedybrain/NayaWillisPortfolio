import React from "react";
import { cn } from "@/lib/utils";

const ProjectName = ({ name }: { name: string }) => {
    return (
        <h2
            className={cn(
                "border border-black bg-secondary",
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
    );
};

export default ProjectName;
