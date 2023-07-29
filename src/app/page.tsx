/* eslint-disable react-hooks/rules-of-hooks */
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
import { useAuthContext } from "@/contexts/authContext";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  const { isLoggedIn } = useAuthContext();
  return (
    <div>
      <Navbar />
      <Herosection isLoggedIn={isLoggedIn} />

      <Problemsection />
      <Benefitsection />
      <Reviewsection />
      <Pricesection />
      <Questionsection />
      <Lastsection isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
};

export default page;
