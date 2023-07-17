import "./globals.css";
import { cn } from "../lib/utils";

import { IBM_Plex_Sans_Thai } from "next/font/google";
import Provider from "./provider";
import Navbar from "@/components/Navbar";

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(imb_plex_sans_thai.className)}>
      <body className={cn("min-h-screen mx-auto", "scroll-smooth")}>
        <Navbar />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
