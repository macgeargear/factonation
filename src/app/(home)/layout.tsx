import { FC } from "react";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Navbar from "@/components/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

const ibm_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

const layout: FC<layoutProps> = ({ children }) => {
  //   const { isLoggedIn } = useAuthContext();
  //   console.log(isLoggedIn, "eieifoobar");
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
