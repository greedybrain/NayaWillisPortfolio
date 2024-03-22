import AppSection from "../0_common/AppSection";
import FixedWidthContainer from "../FixedWidthContainer";
import HeroGreetingText from "./heroGreetingText/HeroGreetingText";
import HeroRoleButton from "./heroRoleButton/HeroRoleButton";
import HeroRoleDescription from "./heroRoleDescription/HeroRoleDescription";
import HeroRoleDirection from "./heroRoleDirection/HeroRoleDirection";
import HeroRoleImage from "./heroRoleImage/HeroRoleImage";
import HeroRoleStatement from "./heroRoleStatement/HeroRoleStatement";
import React from "react";
import { cn } from "@/lib/utils";

const HomeHeroSection = () => {
    return (
        <AppSection id="hero" className={cn("lg:flex")}>
            <FixedWidthContainer
                className={cn(
                    "border-t border-b border-black",
                    "flex flex-col",
                    "lg:flex-row",
                )}
            >
                <div
                    className={cn(
                        "bg-primary border-black",
                        "flex flex-col",
                        "items-center",
                        "lg:border-l",
                        "px-5 py-14",
                        "w-full",
                    )}
                >
                    <div>
                        <HeroGreetingText />
                        <HeroRoleStatement />
                        <HeroRoleDescription />
                        <div
                            className={cn(
                                "flex",
                                "gap-x-5",
                                "items-center",
                                "mt-10",
                            )}
                        >
                            <HeroRoleButton />
                            <HeroRoleDirection />
                        </div>
                    </div>
                </div>
                <HeroRoleImage />
            </FixedWidthContainer>
        </AppSection>
    );
};

export default HomeHeroSection;
