import AppSpan from "../../0_common/AppSpan";
import React from "react";
import { cn } from "@/lib/utils";

interface HeroRoleTagProps {
    text: string;
    rotation?: string;
    bgColor?: string;
}

const HeroRoleTag = ({ text, rotation, bgColor }: HeroRoleTagProps) => {
    return (
        <AppSpan
            className={cn(
                `border-2 border-black ${bgColor}`,
                "font-medium",
                "inline-block",
                "p-4",
                `rounded-md ${rotation}`,
                "shadow-neo-sm",
                "text-xl text-center",
            )}
            text={text}
        />
    );
};

export default HeroRoleTag;