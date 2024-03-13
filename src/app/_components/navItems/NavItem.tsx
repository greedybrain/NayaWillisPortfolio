import React, { HTMLAttributes } from "react";

import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

export interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
    name: string;
    path: string;
    linkStyles?: string;
}

const NavItem = ({ name, path, linkStyles, ...rest }: NavItemProps) => {
    return (
        <li {...rest}>
            <Link href={path} className={cn("block", linkStyles)}>
                {name}
            </Link>
        </li>
    );
};

export default NavItem;
