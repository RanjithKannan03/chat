import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navbar";
import Providers from "@/components/Providers";
import SessionHandler from "@/components/SessionHandler";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chirpify",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <SessionHandler>
                    <Providers>
                        <div className="flex w-screen h-screen">
                            <div className="w-20">
                                <NavBar />
                            </div>
                            <div className="w-[calc(100vw-5rem)]">
                                {children}
                            </div>
                        </div>
                    </Providers>
                </SessionHandler>
            </body>
        </html>
    );
}
