"use client";

//import { getCourse } from "@/lib/getCourse";

interface pageProps {
  params: {
    courseId: string;
  };
}
import * as React from "react";
import CourseForm, {
  AdminCoursePage,
} from "@/components/adminCoursePage/CourseForm";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Loading from "@/components/homePage/Loading.json";

interface pageProps {
  params: {
    courseId: string;
  };
}

const Page = ({ params: { courseId } }: pageProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <CourseForm page={AdminCoursePage.Edit} />
      )}
    </>
  );
};
export default Page;
