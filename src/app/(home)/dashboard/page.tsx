"use client";
import CourseStatus from "@/components/CourseStatus";
import Navbar from "@/components/Navbar";
import UserSummary from "@/components/UserSummary";
/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useAuthContext } from "@/contexts/authContext";
import { useCourseStatus } from "@/hooks/useCourseStatus";
import { useCourses, useUsersCourses } from "@/hooks/useCourses";
import { getCourseStatus, getCourses } from "@/lib/getCourse";
import { cn } from "@/lib/utils";
import { CourseDto } from "@/types/dto";
import { BookOpenCheckIcon, PresentationIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState, use } from "react";

interface pageProps {}

const courseFetch = getCourses();

const page: FC<pageProps> = () => {
  const { courses, isLoading, isError } = useUsersCourses();

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error!!!!!!</div>;
  const id = localStorage.getItem("id");
  return (
    <main className=" mt-12">
      <div className="max-w-8xl  bg-background mx-auto p-6 h-fit min-h-screen my-12 flex justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-primary-button my-2 mx-8">
            My Dashboard
          </h1>
          <p className="text-[#222] mx-8">
            Way to go! Here are all the courses you&apos;ve finished.
          </p>
          <div className="flex gap-4 flex-wrap m-8 border-secondary-button border-t-[1.4px] w-fit pt-6">
            {courses.data &&
              courses.data.map((course: CourseDto, i: number) => {
                // const courseStatus = await getCourseStatus(id!, course.id);
                // const courseStatus = useCourseStatus(id!, course.id);
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
                        value={20}
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
        <div className="rounded-xl p-6 bg-gray-100 flex flex-col gap-2 w-1/3 h-fit">
          <div className="flex flex-col items-center my-8">
            <Avatar className="w-24 h-24">
              <AvatarImage
                className="rounded-full"
                src="https://github.com/factonation.png"
                alt="@shadcn"
              />
              <AvatarFallback className="bg-primary-button">F</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-semibold">Cookie Brownie</h1>
            <p>cookie@brownie.com</p>
          </div>
          <div className="flex flex-col justify-start px-4 gap-4 ">
            <h1 className="text-lg font-medium">course summary</h1>
            <div className="flex items-center justify-between rounded-xl bg-background px-8 py-6 gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <PresentationIcon />
                <p className="text-md">Course Completed</p>
              </div>
              <p className="align-self-end px-4 py-2 bg-secondary-button rounded-xl">
                3
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-background px-8 py-6 gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <BookOpenCheckIcon />
                <p className="text-md">Lessons Completed</p>
              </div>
              <p className="align-self-end px-4 py-2 bg-secondary-button rounded-xl">
                3
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
