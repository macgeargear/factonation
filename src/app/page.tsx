"use client";
import { FC } from "react";

import { IBM_Plex_Sans_Thai } from "next/font/google";
import Herosection from "@/components/homePage/Herosection";
import Problemsection from "@/components/homePage/Problemsection";
import Benefitsection from "@/components/homePage/Benefitsection";
import Reviewsection from "@/components/homePage/Reviewsection";
import Pricesection from "@/components/homePage/Pricesection";
import Questionsection from "@/components/homePage/Questionsection";
import Lastsection from "@/components/homePage/Lastsection";
import Footer from "@/components/homePage/Foooter";
import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  //   const { isLoggedIn } = useAuthContext();
  //   console.log(isLoggedIn, "eieifoobar");
  return (
    <div>
      <Navbar />
      <Herosection isLoggedIn={false} />

      <Problemsection />
      <Benefitsection />
      <Reviewsection />
      <Pricesection />
      <Questionsection />
      <Lastsection isLoggedIn={false} />
      <Footer />
    </div>
  );
};

export default page;
