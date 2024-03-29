import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import DrawerMenuContextProvider from "@/contexts/DrawerMenuContext";
import DrawerMenuNav from "./_components/drawerMenuNav/DrawerMenuNav";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ReCaptchaV3 from "./_components/reCaptchaV3/ReCaptchaV3";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "It's Willis",
    description: "Professional Software Developer portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ReCaptchaV3>
                <Analytics />
                <body
                    className={cn(
                        poppins.className,
                        "bg-slate-100",
                        "relative",
                    )}
                >
                    <DrawerMenuContextProvider>
                        <DrawerMenuNav />
                        <Header />
                    </DrawerMenuContextProvider>
                    {children}
                    <Footer />
                </body>
            </ReCaptchaV3>
        </html>
    );
}
