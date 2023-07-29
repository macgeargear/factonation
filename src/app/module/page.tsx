import { ArrowRight } from "lucide-react";
import ModuleCard from "./ModuleCard";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

import { FC } from "react";
import { getCourses } from "@/lib/getCourse";

interface pageProps {}

const page: FC<pageProps> = async () => {
  const courses = await getCourses();
  return (
    <div className="imb_plex_sans_thai">
      {/* <ModuleCard /> */}
      <div className="flex justify-center my-10">
        <div className="flex flex-col gap-10 w-9/12 ">
          <div className="flex gap-2">
            <p className="text-3xl font-black">|</p>
            <p className="text-4xl font-bold">แนะนำคอร์สเรียน</p>
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
