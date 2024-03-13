import AppText from "../../0_common/AppText";
import React from "react";
import { cn } from "@/lib/utils";

const AboutIntroduction = () => {
    return (
        <AppText
            text="Not to sound selfish, but..."
            className={cn("lg:text-xl", "text-lg")}
        />
    );
};

export default AboutIntroduction;
