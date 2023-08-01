"use client";
/* eslint-disable react-hooks/rules-of-hooks */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Progress } from "@/components/ui/Progress";
import { useAuthContext } from "@/contexts/authContext";
import { useCourseStatus } from "@/hooks/useCourseStatus";
import { useCourses } from "@/hooks/useCourses";
import { getCourseStatus, getCourses } from "@/lib/getCourse";
import { cn } from "@/lib/utils";
import { CourseDto } from "@/types/dto";
import { BookOpenCheckIcon, PresentationIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState, use } from "react";
import { useUserCourses } from "@/hooks/useUserCourses";
import axios from "axios";
import { host } from "@/types";

interface pageProps {}

const courseFetch = getCourses();

const fetchStatus = async (courseId: string, studentId: string) => {
  try {
    const res = await axios.post(`${host}/course/student/enrolled`, {
      courseId,
      studentId,
    });
    const status = await res.data.data;
    return status;
  } catch (err) {
    console.error(err);
  }
};
const page: FC<pageProps> = () => {
  // const { courses, isLoading, isError } = useCourses();
  const [courses, setCourses] = useState<CourseDto[]>();
  const [courseStatus, setCourseStatus] = useState<{
    all: number;
    complete: number;
    percentage: number;
  }>();
  const { email, name, isLoggedIn, id } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    const fetchCourse = async () => {
      console.log(token);
      try {
        const res = await fetch(`${host}/course/student/enrolled`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const courses = await res.json();
        console.log(courses);
        setCourses(courses.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourse();
  }, []);

  if (!isLoggedIn)
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="my-auto text-center">You have to log in first!</h1>
      </div>
    );

  return (
    <main className=" mt-12">
      <div className="max-w-8xl mx-auto bg-background p-6 h-fit min-h-screen lg:my-12 flex lg:flex-row flex-col-reverse lg:justify-between">
        <div>
          <h1 className="lg:text-4xl text-2xl font-semibold text-primary-button my-2 mx-8 lg:text-start text-center">
            My Dashboard
          </h1>
          <p className="text-[#222] mx-8 lg:justify-start justify-center lg:text-start text-center">
            Way to go! Here are all the courses you&apos;ve finished.
          </p>
          <div className="flex gap-4 flex-wrap m-8 border-secondary-button border-t-[1.4px] w-fit pt-6 lg:justify-start justify-center">
            {courses &&
              courses.map((course: CourseDto, i: number) => {
                return (
                  <Link
                    href={`/dashboard/learn/course/${course.id}`}
                    className="w-[260px] rounded-lg border-none shadow-md bg-secondary-background overflow-hidden flex flex-col justify-between"
                    key={course.id}
                  >
                    <div>
                      {/* TODO: Replace with photo*/}
                      <Image
                        src={course.imageUrl}
                        alt={`course ${course.courseName}`}
                        width={350}
                        height={160}
                        className="object-cover object-center"
                      />
                      {/* <div className="h-[160px] w-[350px] bg-primary-button"></div>{" "} */}
                      <div className="px-4 py-2">
                        <h1 className="text-lg">{course.courseName}</h1>
                        <div className="flex gap-4 items-center text-md">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              className="rounded-full"
                              src="https://github.com/factonation.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback className="bg-primary-button">
                              F
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-normal">
                            Mr. {course.instructor.name}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-4 py-2">
                      <div className="flex items-center gap-3">
                        <p>เรียนไปเเล้ว</p>
                        {/* <CourseStatus courseId={course.id} studentId={id!} /> */}
                      </div>
                      <Progress
                        value={0}
                        className="h-1 max-w-xl bg-green-400"
                      />
                      <p className="self-end">
                        {" "}
                        {course.isCompleted ? "Completed" : "In Progress"}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="rounded-xl p-6 bg-gray-100 flex flex-col gap-2 lg:w-1/3 w-full h-fit">
          <div className="flex flex-col items-center lg:my-8 my-4">
            <Avatar className="w-24 h-24">
              <AvatarImage className="rounded-full" src="" alt="" />
              <AvatarFallback className="bg-primary-button text-white text-xl">
                {email[0]}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>{email}</p>
          </div>
          <div className="flex flex-col justify-start px-4 gap-4 ">
            <h1 className="text-lg font-medium lg:text-start text-center">
              course summary
            </h1>
            <div className="flex items-center justify-between rounded-xl bg-background px-8 py-6 gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <PresentationIcon />
                <p className="text-md">Course Completed</p>
              </div>
              <p className="align-self-end px-4 py-2 bg-secondary-button rounded-xl">
                0
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-background px-8 py-6 gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <BookOpenCheckIcon />
                <p className="text-md">Lessons Completed</p>
              </div>
              <p className="align-self-end px-4 py-2 bg-secondary-button rounded-xl">
                0
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
