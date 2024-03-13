import AppText from "../../0_common/AppText";
import React from "react";
import { cn } from "@/lib/utils";

const AboutPersonalInterestsDescription = () => {
    return (
        <AppText
            className={cn(
                "font-light",
                "leading-relaxed",
                "lg:text-xl",
                "mt-5",
                "text-lg",
            )}
        >
            Oh, and outside of the realms of coding or programming, I’m
            typically found binge-watching TV shows or movies on Netflix, or
            navigating through whichever one of the seemingly countless
            streaming services I find myself subscribed to at the moment 🤷🏽‍♂️.
        </AppText>
    );
};

export default AboutPersonalInterestsDescription;
