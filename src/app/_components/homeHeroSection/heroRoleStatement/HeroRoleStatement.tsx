import AppSpan from "../../0_common/AppSpan";
import AppText from "../../0_common/AppText";
import HeroRoleTag from "../heroRoleTag/HeroRoleTag";
import React from "react";
import { cn } from "@/lib/utils";

const HeroRoleStatement = () => {
    return (
        <>
            <AppText className={cn("flex", "gap-4", "items-center", "mt-10")}>
                <HeroRoleTag
                    text="Fullstack Developer"
                    rotation="rotate-3"
                    bgColor="bg-[#fabfe2]"
                />
                <AppSpan
                    className={cn("-rotate-3", "sm:text-xl", "text-lg")}
                    text="with a"
                />
            </AppText>
            <AppText className={cn("flex", "gap-4", "items-center", "mt-10")}>
                <AppSpan
                    className={cn("rotate-3", "sm:text-xl", "text-lg")}
                    text="passion for"
                />
                <HeroRoleTag
                    text="Frontend Engineering"
                    rotation="-rotate-3"
                    bgColor="bg-[#b9f7bf]"
                />
            </AppText>
        </>
    );
};

export default HeroRoleStatement;
