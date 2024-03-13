"use client";

import React, { useContext } from "react";

import AppBranding from "../appBranding/AppBranding";
import AppHeader from "../0_common/AppHeader";
import { DrawerMenuContext } from "@/contexts/DrawerMenuContext";
import { IoClose } from "react-icons/io5";
import NavItem from "../navItems/NavItem";
import { cn } from "@/lib/utils";

const DrawerMenuNav = () => {
    const { navItems, shouldShowDrawerMenu, setShouldShowDrawerMenu } =
        useContext(DrawerMenuContext);

    if (!shouldShowDrawerMenu) return null;

    return (
        <nav
            className={cn(
                "bg-slate-100",
                "fixed",
                "h-screen",
                "w-full",
                "z-10",
            )}
        >
            <AppHeader
                className={cn(
                    "flex",
                    "items-center",
                    "justify-between",
                    "py-3 px-5",
                )}
            >
                <AppBranding textSize="text-3xl" textColor="text-black" />
                <div
                    className={cn(
                        "border-2 border-black bg-secondary",
                        "cursor-pointer",
                        "rounded-lg",
                        "shadow-neo-xs",
                    )}
                    onClick={() => setShouldShowDrawerMenu(false)}
                >
                    <IoClose size={30} />
                </div>
            </AppHeader>
            <ul
                className={cn(
                    "flex flex-col",
                    "gap-y-5",
                    "items-center",
                    "mt-20",
                    "px-5",
                )}
            >
                {navItems.map((item) => (
                    <NavItem
                        key={item.name}
                        {...item}
                        linkStyles={cn("font-medium", "text-xl")}
                        onClick={() => setShouldShowDrawerMenu(false)}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default DrawerMenuNav;
