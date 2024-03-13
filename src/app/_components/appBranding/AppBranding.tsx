import AppSpan from "../0_common/AppSpan";
import AppText from "../0_common/AppText";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const AppBranding = ({
    textColor,
    textSize,
}: {
    textColor: string;
    textSize?: string;
}) => {
    return (
        <Link
            href="/"
            className={cn(
                // "border-2 border-black bg-[#b9f7bf]",
                "inline-block",
                "py-1 px-2",
                // "rounded-md",
                // "shadow-neo-xs",
                `${textColor} ${textSize}`,
            )}
        >
            <AppText
                className={cn("flex flex-col font-bold", "justify-center")}
            >
                NW.
            </AppText>
        </Link>
    );
};

export default AppBranding;
