import NavbarAdmin from "@/components/NavbarAdmin";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <NavbarAdmin />
      {children}
    </div>
  );
};

export default layout;
