import AppText from "../../0_common/AppText";
import React from "react";
import { cn } from "@/lib/utils";

const ContactCTA = () => {
    return (
        <AppText
            text="Excited to explore amazing opportunities together, whether it's contract work, freelance gigs, or full-time positions! If you have any questions or are interested in collaborating, I'd love to hear from you. Just drop your details in the form below, and I'll be in touch as soon as possible! Let's make something incredible happen 🚀"
            className={cn("font-light", "text-center")}
        />
    );
};

export default ContactCTA;
