"use client";
import "./globals.css";
import { cn } from "../lib/utils";

import { IBM_Plex_Sans_Thai } from "next/font/google";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/contexts/authContext";

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

// const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className={cn(imb_plex_sans_thai.className)}>
        <body className={cn("min-h-screen mx-auto")}>
          {/* <Navbar /> */}
          {children}
        </body>
        {/* </QueryClientProvider> */}
      </html>
    </AuthProvider>
  );
}
