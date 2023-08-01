import { ArrowRight } from "lucide-react";
import ModuleCard from "./ModuleCard";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

import { FC } from "react";
import { Button } from "@/components/ui/MainButton";
import { getCourses } from "@/lib/getCourse";

interface pageProps {}

const page: FC<pageProps> = async () => {
  const courses = await getCourses();
  return (
    <div className="imb_plex_sans_thai">
      {/* <ModuleCard /> */}
      <div className="flex items-center justify-center my-10">
        <div className="flex flex-col gap-10 items-center ">
          <div className="flex gap-2 w-auto">
            <p className="lg:text-4xl text-2xl font-bold">แนะนำคอร์สเรียน</p>
          </div>

          {courses.map((course, i) => {
            return <ModuleCard course={course} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
