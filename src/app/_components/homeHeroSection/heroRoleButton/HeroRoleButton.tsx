import Link from "next/link";
import { cn } from "@/lib/utils";

const HeroRoleButton = () => {
    return (
        <Link
            href="#contact"
            className={cn(
                "border-2 border-black bg-[#FADE5A]",
                "font-medium",
                "px-6 py-4",
                "rounded-md",
                "shadow-neo-md sm:text-2xl",
                "text-xl",
            )}
        >
            Let&apos;s work together!
        </Link>
    );
};

export default HeroRoleButton;
