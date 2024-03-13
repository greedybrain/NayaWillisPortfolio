"use client";

import React, { useState } from "react";

import navItemsJson from "@/app/_components/navItems/data/navItems.json";

interface IDrawerMenuContext {
    navItems: typeof navItemsJson;
    shouldShowDrawerMenu: boolean;
    menuButtonRef: React.RefObject<HTMLElement> | undefined;
    setMenuButtonRef: React.Dispatch<
        React.SetStateAction<React.RefObject<HTMLElement> | undefined>
    >;
    setShouldShowDrawerMenu: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose: () => void;
}

export const DrawerMenuContext = React.createContext<IDrawerMenuContext>({
    navItems: navItemsJson,
    shouldShowDrawerMenu: false,
    menuButtonRef: undefined,
    setMenuButtonRef: () => null,
    setShouldShowDrawerMenu: () => null,
    handleClose: () => null,
});

const DrawerMenuContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [navItems] = useState(navItemsJson);
    const [menuButtonRef, setMenuButtonRef] = useState<
        React.RefObject<HTMLElement> | undefined
    >(undefined);
    const [shouldShowDrawerMenu, setShouldShowDrawerMenu] =
        useState<boolean>(false);

    const handleClose = () => {
        setShouldShowDrawerMenu(false);
    };

    return (
        <DrawerMenuContext.Provider
            value={{
                navItems,
                shouldShowDrawerMenu,
                menuButtonRef,
                setMenuButtonRef,
                setShouldShowDrawerMenu,
                handleClose,
            }}
        >
            {children}
        </DrawerMenuContext.Provider>
    );
};

export default DrawerMenuContextProvider;
