import AppSpan from "../../0_common/AppSpan";
import AppText from "../../0_common/AppText";
import React from "react";
import { cn } from "@/lib/utils";

const HeroRoleDescription = () => {
    return (
        <AppText className={cn("font-light", "mt-10 max-w-[550px]", "text-lg")}>
            As a <strong>Fullstack Developer</strong> with a strong focus on{" "}
            <strong>Frontend Engineering</strong>, my passion lies in developing
            engaging, user-centric web experiences.
        </AppText>
    );
};

export default HeroRoleDescription;
