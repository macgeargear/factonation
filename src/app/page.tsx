"use client";

import { useAuthContext } from "@/contexts/authContext";
import Lottie from "lottie-react";
import { FC, useEffect, useState } from "react";
import Loading from "../components/homePage/Loading.json";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/homePage/HeroSection";
import Problemsection from "@/components/homePage/ProblemSection";
import Benefitsection from "@/components/homePage/BenefitSection";
import Reviewsection from "@/components/homePage/ReviewSection";
import Pricesection from "@/components/homePage/PriceSection";
import Questionsection from "@/components/homePage/QuestionSection";
import Lastsection from "@/components/homePage/LastSection";
import Footer from "@/components/homePage/Foooter";

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
