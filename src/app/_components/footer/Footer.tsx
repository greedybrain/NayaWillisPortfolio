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
        <footer className={cn("flex", "items-center", "justify-between")}>
            <FixedWidthContainer
                className={cn(
                    "border-b-2 border-b-black bg-black",
                    "flex",
                    "items-center",
                    "justify-between",
                    "px-5 py-10",
                )}
            >
                <div className={cn("flex flex-col", "items-center", "w-full")}>
                    <div className={cn("lg:hidden", "py-2")}>
                        <AppBranding
                            textColor="text-white"
                            textSize="text-3xl"
                        />
                    </div>
                    <div
                        className={cn(
                            "gap-x-20",
                            "lg:flex lg:items-center lg:justify-center",
                            "w-full",
                        )}
                    >
                        <div
                            className={cn("hidden", "lg:block", "self-center")}
                        >
                            <AppBranding
                                textColor="text-white"
                                textSize="text-3xl"
                            />
                        </div>
                        <div>
                            <AppText
                                className={cn(
                                    "font-bold",
                                    "text-lg text-white text-center",
                                )}
                            >
                                Quick Links
                            </AppText>
                            <ul
                                className={cn(
                                    "flex flex-col",
                                    "gap-y-2",
                                    "items-center",
                                    "mt-4",
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
                        </div>
                        <div>
                            <AppText
                                className={cn(
                                    "font-bold",
                                    "lg:mt-0",
                                    "mt-5",
                                    "text-lg text-white text-center",
                                )}
                            >
                                Socials
                            </AppText>
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
                                        <FaGithubSquare
                                            size={30}
                                            color="white"
                                        />
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
                        </div>
                    </div>
                    <AppText
                        className={cn(
                            "border-t border-white/50",
                            "mt-20",
                            "py-5",
                            "text-white text-center",
                            "w-full",
                        )}
                    >
                        &copy; 2024 {"ItsWillis.Dev"}
                    </AppText>
                </div>
            </FixedWidthContainer>
        </footer>
    );
};

export default Footer;
