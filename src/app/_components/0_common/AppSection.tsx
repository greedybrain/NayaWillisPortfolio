import React, { type HTMLAttributes } from "react";

interface AppSectionProps extends HTMLAttributes<HTMLElement> {}

const AppSection = ({ children, ...rest }: AppSectionProps) => {
    return <section {...rest}>{children}</section>;
};

export default AppSection;
