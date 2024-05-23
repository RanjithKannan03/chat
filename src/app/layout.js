import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen flex">
        <div className="w-32">
        <NavBar/>
        </div>
        <div className="w-[calc(100vw-8rem)]">
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
