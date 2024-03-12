import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import { cn } from "@/lib/utils";

const ProjectLink = ({ link }: { link: string }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className={cn("font-medium flex", "gap-x-3", "items-center", "p-3")}
        >
            <span className={cn("inline-block", "text-lg")}>Check it out</span>
            <div>
                <FaExternalLinkAlt size={18} />
            </div>
        </a>
    );
};

export default ProjectLink;
