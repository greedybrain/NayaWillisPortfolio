import AppButton from "../../0_common/AppButton";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const HeroRoleButton = () => {
    return (
        <Link
            href=""
            className={cn(
                "border-2 border-black bg-[#FADE5A]",
                "font-medium",
                "px-6 py-4",
                "rounded-md -rotate-3",
                "shadow-neo-md",
                "text-xl",
            )}
        >
            Learn more
        </Link>
    );
};

export default HeroRoleButton;