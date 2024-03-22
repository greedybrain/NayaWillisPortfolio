import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const HeroRoleDirection = () => {
    return (
        <div className={cn("relative", "top-10")}>
            <Image
                src="/assets/itswillisdev-swiggly-arrow.png"
                alt="arrow graphic"
                width={75}
                height={75}
            />
        </div>
    );
};

export default HeroRoleDirection;
