import AppBranding from "../appBranding/AppBranding";
import AppHeader from "../0_common/AppHeader";
import FixedWidthContainer from "../FixedWidthContainer";
import MenuButton from "../menuButton/MenuButton";
import React from "react";
import { cn } from "@/lib/utils";

const Header = () => {
    return (
        <AppHeader
            className={cn(
                "border-b-2 border-b-black",
                "flex",
                "items-center",
                "justify-between",
            )}
        >
            <FixedWidthContainer
                className={cn(
                    "flex",
                    "items-center",
                    "justify-between",
                    "py-3",
                )}
            >
                <AppBranding textColor="black" textSize="2xl" />
                <MenuButton className={cn("cursor-pointer")} size={30} />
            </FixedWidthContainer>
        </AppHeader>
    );
};

export default Header;
