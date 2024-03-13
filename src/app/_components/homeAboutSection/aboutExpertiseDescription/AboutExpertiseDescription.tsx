import AppText from "../../0_common/AppText";
import React from "react";
import { cn } from "@/lib/utils";

const AboutExpertiseDescription = () => {
    return (
        <AppText
            className={cn(
                "font-light",
                "leading-relaxed",
                "lg:text-xl",
                "mt-10",
                "text-lg",
            )}
        >
            My expertise extends across key technologies such as <b>React</b>,{" "}
            <b>Redux</b>, <b>NextJS</b>, and <b>TypeScript</b>, enabling me to
            develop dynamic, responsive, and maintainable web interfaces. While
            my experience includes full-stack capabilities, with competencies in{" "}
            <b>NodeJS,</b> <b>Redis,</b> <b>Prisma,</b> and other technologies
            for backend support, my true enthusiasm is in the frontend realm
            where I leverage my skills to bridge the gap between technical
            possibilities and user needs.
        </AppText>
    );
};

export default AboutExpertiseDescription;
