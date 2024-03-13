import AppText from "../../0_common/AppText";
import HeroNameHighlight from "../heroNameHighlight/HeroNameHighlight";
import React from "react";
import { cn } from "@/lib/utils";

const HeroGreetingText = () => {
    return (
        <AppText className={cn("font-light", "sm:text-xl", "text-lg")}>
            Good day, my name is <HeroNameHighlight />
        </AppText>
    );
};

export default HeroGreetingText;
