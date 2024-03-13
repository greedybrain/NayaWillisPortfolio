import NavItem from "./NavItem";
import React from "react";
import { cn } from "@/lib/utils";
import navItemsJson from "./data/navItems.json";

const NavItems = () => {
    return (
        <nav className={cn("hidden", "md:block")}>
            <ul className={cn("flex", "gap-x-10", "items-center", "text-lg")}>
                {navItemsJson.map((item) => (
                    <NavItem key={item.name} {...item} />
                ))}
            </ul>
        </nav>
    );
};

export default NavItems;
