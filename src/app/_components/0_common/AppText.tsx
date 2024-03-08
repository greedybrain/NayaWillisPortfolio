import React, { type HTMLAttributes } from "react";

interface AppTextProps extends HTMLAttributes<HTMLParagraphElement> {
    text?: string;
}

const AppText = ({ children, text, ...rest }: AppTextProps) => {
    if (children) return <p {...rest}>{children}</p>;

    return <p {...rest}>{text}</p>;
};

export default AppText;
