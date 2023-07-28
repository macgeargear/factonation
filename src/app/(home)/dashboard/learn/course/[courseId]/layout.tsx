/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AccordianComponent from "@/components/coursePage/AccordianComponent";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { getCourse } from "@/lib/getCourse";
import { getLessonByCourseIdFormetted } from "@/lib/getLessons";
import { cn } from "@/lib/utils";
import { CourseDto, CourseWithLessonDto, LessonDto } from "@/types/dto";
import { PlayCircleIcon, Trophy } from "lucide-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface layoutProps {
  params: {
    courseId: string;
  };

  children: React.ReactNode;
  lessons: any;
}

export const page: FC<layoutProps> = ({ children, params }) => {
  const [lessons, setLessons] = useState<LessonDto[][]>([]);
  const [course, setCourse] = useState<CourseWithLessonDto>();
  const [status, setStatus] = useState<{
    all: number;
    complete: number;
    percentage: number;
  }>();

  useEffect(() => {
    const fetLessons = async () => {
      console.log(localStorage.getItem("token"));
      console.log(params.courseId);
      const _lessons = await getLessonByCourseIdFormetted(params.courseId);
      console.log(_lessons);
      setLessons(_lessons);
    };

    fetLessons();
  }, [params.courseId]);

  useEffect(() => {
    const fetchCourse = async () => {
      const _course = await getCourse(params.courseId);
      console.log(_course);
      setCourse(_course);
    };

    fetchCourse();
  }, [params.courseId]);

  useEffect(() => {
    const getLesson = async () => {
      const res = await fetch("http://localhost:8000/lesson/status/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: params.courseId,
          studentId: "1ac78d03-3d75-415f-999d-bc9854085a5c",
        }),
      });
      const _status = await res.json();
      setStatus(_status.data);
    };

    getLesson();
  }, [params.courseId]);

  console.log(course?.courseName);
  return (
    <div className="flex gap-4 h-full bg-secondary-background shadow-sm min-h-screen">
      <Toaster />
      <div className="bg-[#fff] min-w-[380px] max-h-screen overflow-scroll flex gap-2 flex-col  justify-start text-[#222] border-r-secondary-button border-r-[1px]">
        <div className="p-4 border-secondary-button border-b ">
          <h1 className="font-medium text-2xl">{course?.courseName}</h1>
          <h1 className="font-medium text-xl">Course Progress</h1>
          <div className="flex items-center">
            <Progress value={20} className="bg-primary-button h-1" />
            <Trophy
              className=" bg-secondary-button p-2 rounded-lg mx-2"
              size={32}
            />
          </div>
          <p>{status?.percentage} % </p>
        </div>
        <div className="">
          {lessons &&
            lessons.map((lesson, i) => {
              console.log(lesson);
              const completedLesson = lesson.filter(
                (l: any) => l.isLessonCompleted
              ).length;
              return (
                <AccordianComponent
                  week={i}
                  params={params}
                  key={i}
                  lesson={lesson}
                  completedLesson={completedLesson}
                />
              );
            })}
        </div>
      </div>
      {children}
    </div>
  );
};

export default page;
