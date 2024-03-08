import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const HeroRoleImage = () => {
    return (
        <div
            className={cn(
                "bg-[#fff3b6] border-t-2 border-t-black",
                "flex",
                "items-center",
                "justify-center",
                "w-full",
            )}
        >
            <div
                className={cn(
                    "bg-[#fff3b6]",
                    "flex",
                    "h-[500px]",
                    "items-center",
                    "justify-center",
                    "relative",
                    "w-full",
                )}
            >
                <Image
                    src="/assets/naya-willis-black-and-white-v6.png"
                    alt="avatar"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
};

export default HeroRoleImage;