"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import React, { useContext, type HTMLAttributes } from "react";
import { DrawerMenuContext } from "@/contexts/DrawerMenuContext";

interface MenuButtonProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}

const MenuButton = ({ size, ...rest }: MenuButtonProps) => {
    const { setShouldShowDrawerMenu } = useContext(DrawerMenuContext);

    return (
        <div {...rest} onClick={() => setShouldShowDrawerMenu(true)}>
            <HiMenuAlt3 size={size} />
        </div>
    );
};

export default MenuButton;
