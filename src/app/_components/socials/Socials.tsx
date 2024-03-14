import { FaDev, FaGithubSquare, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import React from "react";
import Social from "./Social";
import { cn } from "@/lib/utils";
import socialsJson from "./data/socials.json";

const size = 30;
const color = "white";

export const socialIconMapping = {
    FaLinkedin: <FaLinkedin size={size} color={color} />,
    FaDev: <FaDev size={size} color={color} />,
    FaGithubSquare: <FaGithubSquare size={size} color={color} />,
    MdEmail: <MdEmail size={size} color={color} />,
};

const Socials = () => {
    return (
        <ul
            className={cn(
                "flex",
                "gap-x-2",
                "items-center",
                "justify-center",
                "mt-4",
                "pb-5",
                "text-white",
                "w-full",
            )}
        >
            {socialsJson.map((item) => (
                <Social key={item.name} {...item} />
            ))}
        </ul>
    );
};

export default Socials;
