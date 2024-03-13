import AppBranding from "../appBranding/AppBranding";
import AppHeader from "../0_common/AppHeader";
import FixedWidthContainer from "../FixedWidthContainer";
import MenuButton from "../menuButton/MenuButton";
import NavItems from "../navItems/NavItems";
import React from "react";
import { cn } from "@/lib/utils";

const Header = () => {
    return (
        <AppHeader className={cn("flex", "items-center", "justify-between")}>
            <FixedWidthContainer
                className={cn(
                    "flex",
                    "items-center",
                    "justify-between",
                    "py-3 px-0",
                )}
            >
                <AppBranding textColor="text-black" textSize="text-3xl" />
                <NavItems />
                <MenuButton
                    className={cn("cursor-pointer", "md:hidden")}
                    size={30}
                />
            </FixedWidthContainer>
        </AppHeader>
    );
};

export default Header;
