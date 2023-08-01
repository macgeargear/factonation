"use client";
import { FC, useEffect, useState } from "react";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Herosection from "@/components/homePage/Herosection";
import Problemsection from "@/components/homePage/Problemsection";
import Benefitsection from "@/components/homePage/Benefitsection";
import Reviewsection from "@/components/homePage/Reviewsection";
import Questionsection from "@/components/homePage/Questionsection";
import Lastsection from "@/components/homePage/Lastsection";
import Footer from "@/components/homePage/Foooter";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Pricesection from "@/components/homePage/Pricesection";
import Lottie from "lottie-react";
import Loading from "@/components/homePage/Loading.json";
import Head from "next/head";
import { useAuthContext } from "@/contexts/authContext";

interface pageProps {}
const Homepage: FC = ({}) => {
  const { isLoggedIn } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center ">
          <div className=" mx-auto my-24 w-auto h-auto">
            <Lottie loop={true} animationData={Loading} size={200} />
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Homepage;
