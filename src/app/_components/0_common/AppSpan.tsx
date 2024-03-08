import React, { type HTMLAttributes } from "react";

interface AppSpanProps extends HTMLAttributes<HTMLSpanElement> {
    text?: string;
}

const AppSpan = ({ children, text, ...rest }: AppSpanProps) => {
    if (children) return <span {...rest}>{children}</span>;

    return <span {...rest}>{text}</span>;
};

export default AppSpan;
