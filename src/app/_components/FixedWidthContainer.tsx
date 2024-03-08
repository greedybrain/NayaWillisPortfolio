import { type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface FixedWidthContainerProps extends HTMLAttributes<HTMLDivElement> {}

const FixedWidthContainer = ({
    children,
    ...rest
}: FixedWidthContainerProps) => {
    return (
        <div
            {...rest}
            className={cn(
                "mx-auto",
                "max-w-[1280px]",
                "px-5",
                "w-full",
                rest.className,
            )}
        >
            {children}
        </div>
    );
};

export default FixedWidthContainer;
