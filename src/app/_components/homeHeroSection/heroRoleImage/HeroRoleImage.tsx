import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const HeroRoleImage = () => {
    return (
        <div
            className={cn(
                "bg-[#fff3b6] border-t-2 border-black",
                "flex",
                "items-center",
                "justify-center",
                "lg:border-t-0 lg:border-l-2 lg:w-[800px] lg:border-r-2",
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
                    src="https://mepjqyejyketnjhgffwm.supabase.co/storage/v1/object/public/Avatars/naya-willis-black-and-white-v6.png"
                    alt="avatar"
                    width={300}
                    height={300}
                    className={cn("rotate-12")}
                />
            </div>
        </div>
    );
};

export default HeroRoleImage;
