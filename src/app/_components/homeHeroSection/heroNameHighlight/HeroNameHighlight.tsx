import AppSpan from "../../0_common/AppSpan";
import React from "react";
import { cn } from "@/lib/utils";

const HeroNameHighlight = () => {
    return <AppSpan text="Naya Willis." className={cn("font-medium")} />;
};

export default HeroNameHighlight;
