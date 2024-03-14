import React from "react";
import { socialIconMapping } from "./Socials";

interface SocialProps {
    path: string;
    icon: string;
}

const Social = ({ path, icon }: SocialProps) => {
    return (
        <li>
            <a href={path} target="_blank" rel="noreferrer noopener">
                {socialIconMapping[icon as keyof typeof socialIconMapping]}
            </a>
        </li>
    );
};

export default Social;
