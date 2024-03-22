import React from "react";
import { cn } from "@/lib/utils";

const RepeatTitle = ({ titleToRepeat }: { titleToRepeat: string }) => {
    const renderRepeatTitle = () => {
        let title = "";
        for (let i = 0; i < 100; i++) {
            title += `${titleToRepeat}\t\t`;
        }
        return title;
    };
    return (
        <div
            className={cn(
                "bg-black",
                "flex",
                "gap-10",
                "h-[60px]",
                "items-center",
                "overflow-hidden",
            )}
        >
            <p
                className={cn(
                    "flex font-medium",
                    "items-center",
                    "px-5",
                    "text-center text-nowrap text-xl text-white",
                    "whitespace-pre-wrap",
                )}
            >
                {renderRepeatTitle()}
            </p>
        </div>
    );
};

export default RepeatTitle;
