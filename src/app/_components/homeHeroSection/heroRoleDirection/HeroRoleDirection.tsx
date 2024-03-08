import { FiCornerRightDown } from "react-icons/fi";
import React from "react";
import { cn } from "@/lib/utils";

const HeroRoleDirection = () => {
    return (
        <div className={cn("relative", "top-5")}>
            <FiCornerRightDown size={50} />
        </div>
    );
};

export default HeroRoleDirection;
