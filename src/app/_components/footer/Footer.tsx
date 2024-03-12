import { FaDev, FaGithubSquare, FaLinkedin } from "react-icons/fa";

import AppBranding from "../appBranding/AppBranding";
import AppText from "../0_common/AppText";
import FixedWidthContainer from "../FixedWidthContainer";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import React from "react";
import { cn } from "@/lib/utils";

const Footer = () => {
    return (
        <footer
            className={cn(
                "border-b-2 border-b-black bg-black",
                "flex",
                "items-center",
                "justify-between",
            )}
        >
            <FixedWidthContainer
                className={cn(
                    "flex",
                    "items-center",
                    "justify-between",
                    "py-10",
                )}
            >
                <div className={cn("flex flex-col", "items-center", "w-full")}>
                    <div className={cn("py-2")}>
                        <AppBranding
                            textColor="text-white"
                            textSize="text-2xl"
                        />
                    </div>
                    <ul
                        className={cn(
                            "flex flex-col",
                            "gap-y-2",
                            "items-center",
                            "text-white",
                            "w-full",
                        )}
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                    <AppText
                        className={cn(
                            "font-bold",
                            "mt-5",
                            "text-lg text-white",
                        )}
                    >
                        Socials
                    </AppText>
                    <ul
                        className={cn(
                            "border-b border-b-white",
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
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <FaLinkedin size={30} color="white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <FaDev size={30} color="white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <FaGithubSquare size={30} color="white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:hireme@itswillis.dev"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <MdEmail size={30} color="white" />
                            </a>
                        </li>
                    </ul>
                    <AppText className={cn("mt-5", "text-white")}>
                        &copy; 2024 {"ItsWillis.Dev"}
                    </AppText>
                </div>
            </FixedWidthContainer>
        </footer>
    );
};

export default Footer;
