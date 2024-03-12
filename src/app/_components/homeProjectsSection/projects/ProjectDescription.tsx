import AppText from "../../0_common/AppText";
import React from "react";
import { cn } from "@/lib/utils";

const ProjectDescription = ({ description }: { description: string }) => {
    return (
        <AppText className={cn("font-light", "my-10", "text-lg")}>
            {description}
        </AppText>
    );
};

export default ProjectDescription;
