import { Button } from "@/components/ui/Button";
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

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

function Homepage() {
  return (
    <div className={imb_plex_sans_thai.className}>
      <Herosection />
      <Problemsection />
      <Benefitsection />
      <Reviewsection />
      <Pricesection />
      <Questionsection />
      <Lastsection />
      <Footer />
    </div>
  );
}

export default Homepage;
