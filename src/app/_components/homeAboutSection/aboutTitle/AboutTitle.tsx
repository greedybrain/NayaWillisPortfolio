import React from "react";
import { cn } from "@/lib/utils";

const AboutTitle = () => {
    return (
        <h1
            className={cn(
                "border-2 border-black bg-[#fabfe2]",
                "font-bold",
                "inline-block",
                "lg:text-3xl lg:mt-3",
                "mt-2",
                "px-6 py-3",
                "rounded-lg",
                "shadow-neo-md",
                "text-2xl",
            )}
        >
            About Me
        </h1>
    );
};

export default AboutTitle;
