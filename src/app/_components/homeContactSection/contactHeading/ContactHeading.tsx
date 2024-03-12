import React from "react";
import { cn } from "@/lib/utils";

const ContactHeading = () => {
    return (
        <h2 className={cn("font-bold", "text-center text-3xl")}>
            <span className={cn("inline-block", "mr-2")}>👋🏽</span> Hello Again
        </h2>
    );
};

export default ContactHeading;
