"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface ProjectVideoDemoProps {
    src: string;
    index: number;
}

const ProjectVideoDemo = ({ src, index }: ProjectVideoDemoProps) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // This function checks if the current video is in fullscreen mode
        const handleFullscreenChange = () => {
            if (document.fullscreenElement === videoRef.current) {
                setIsFullscreen(true);
            } else {
                setIsFullscreen(false);
            }
        };

        // Add event listeners for fullscreen change
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        document.addEventListener(
            "webkitfullscreenchange",
            handleFullscreenChange,
        ); // For Safari
        document.addEventListener(
            "mozfullscreenchange",
            handleFullscreenChange,
        ); // For Firefox
        document.addEventListener("MSFullscreenChange", handleFullscreenChange); // For IE/Edge

        // Cleanup function to remove the event listeners
        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange,
            );
            document.removeEventListener(
                "webkitfullscreenchange",
                handleFullscreenChange,
            );
            document.removeEventListener(
                "mozfullscreenchange",
                handleFullscreenChange,
            );
            document.removeEventListener(
                "MSFullscreenChange",
                handleFullscreenChange,
            );
        };
    }, []);

    return (
        <div
            className={cn("border-b-2 border-black", "lg:w-3/4 lg:border-b-0", {
                "lg:border-r-2": index % 2 === 0,
                "lg:border-l-2": index % 2 !== 0,
            })}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className={cn("h-full", "w-full", {
                    "object-cover": !isFullscreen,
                })}
                controls
                ref={videoRef}
            >
                <source
                    src={src}
                    type="video/mp4"
                    className={cn("border-2 border-green-500")}
                />
            </video>
        </div>
    );
};

export default ProjectVideoDemo;
