import { HiMenuAlt3 } from "react-icons/hi";
import React, { type HTMLAttributes } from "react";

interface MenuButtonProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}

const MenuButton = ({ size, ...rest }: MenuButtonProps) => {
    return (
        <div {...rest}>
            <HiMenuAlt3 size={size} />
        </div>
    );
};

export default MenuButton;
