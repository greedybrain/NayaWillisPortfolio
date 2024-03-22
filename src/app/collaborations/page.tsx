import AppButton from "../_components/0_common/AppButton";
import FixedWidthContainer from "../_components/FixedWidthContainer";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const CollaborationsPage = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <FixedWidthContainer
                className={cn("flex", "items-center")}
            ></FixedWidthContainer>
        </main>
    );
};

export default CollaborationsPage;
