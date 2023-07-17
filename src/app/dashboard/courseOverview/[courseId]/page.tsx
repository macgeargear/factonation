/* eslint-disable react-hooks/rules-of-hooks */
import Details from "@/components/courseOverviewPage/Details";
import Header from "@/components/courseOverviewPage/Header";
import { useCourse } from "@/hooks/useCourse";
import { useCourses } from "@/hooks/useCourses";
import { getCourse } from "@/lib/getCourse";
import { NOTFOUND } from "dns";

import { FC } from "react";

interface pageProps {
  params: {
    courseId: string;
  };
}

const page: FC<pageProps> = async ({ params: { courseId } }) => {
  // const { data, isError, isLoading } = useCourse(courseId);
  // // console.log(courseId);
  const course = await getCourse(courseId);
  // if (isLoading) return <h1>Loading.......</h1>;
  // if (!data) return <NOTFOUND />;

  return (
    <>
      <Header course={course} />
      <Details course={course} />
    </>
  );
};

export default page;
