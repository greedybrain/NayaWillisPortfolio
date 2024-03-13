import Link from "next/link";
import { cn } from "@/lib/utils";

const HeroRoleButton = () => {
    return (
        <Link
            href=""
            className={cn(
                "border-2 border-black bg-[#FADE5A]",
                "font-medium",
                "px-6 py-4",
                "rounded-md -rotate-3",
                "shadow-neo-md sm:text-2xl",
                "text-xl",
            )}
        >
            Learn more
        </Link>
    );
};

export default HeroRoleButton;
