import AppSection from "../0_common/AppSection";
import { FiCornerRightDown } from "react-icons/fi";
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
        <AppSection className={cn("bg-[#dac5f7] border-b-2 border-b-black")}>
            <FixedWidthContainer>
                <div className={cn("py-14")}>
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
            </FixedWidthContainer>
            <HeroRoleImage />
        </AppSection>
    );
};

export default HomeHeroSection;
