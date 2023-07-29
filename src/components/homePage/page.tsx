import Herosection from "./Herosection";
import Problemsection from "./Problemsection";
import Benefitsection from "./Benefitsection";
import Reviewsection from "./Reviewsection";
import Questionsection from "./Questionsection";
import Pricesection from "./Pricesection";

import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Building2 } from "lucide-react";
import Footer from "./Foooter";
import Lastsection from "./Lastsection";
import { useAuthContext } from "@/contexts/authContext";

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

function Homepage() {
  const { isLoggedIn } = useAuthContext();
  return (
    <div className={imb_plex_sans_thai.className}>
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
}

export default Homepage;
