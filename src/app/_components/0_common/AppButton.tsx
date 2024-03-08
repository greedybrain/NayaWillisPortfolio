import React, { type HTMLAttributes } from "react";

export interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text?: string;
}

const AppButton = ({ children, text, ...rest }: AppButtonProps) => {
    if (children) return <button {...rest}>{children}</button>;

    return <button {...rest}>{text}</button>;
};

export default AppButton;
