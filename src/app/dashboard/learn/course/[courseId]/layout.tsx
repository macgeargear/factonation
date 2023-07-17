/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AccordianComponent from "@/components/coursePage/AccordianComponent";
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
      const _lessons = await getLessonByCourseIdFormetted(params.courseId);
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
          studentId: "baee72df-80d5-4ada-99bf-86bf8caf14b6",
        }),
      });
      const _status = await res.json();
      setStatus(_status.data);
    };

    getLesson();
  });

  return (
    <div className="flex gap-4 h-full bg-secondary-background shadow-sm">
      <Toaster />
      <div className="bg-[#fff] min-w-[380px] max-h-screen overflow-scroll flex gap-2 flex-col  justify-start text-[#222] border-r-secondary-button border-r-[1px]">
        <div className="p-4 border-secondary-button border-b ">
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
          {lessons.map((lesson: any, i: number) => {
            const completedLesson = lesson.filter(
              (l: any) => l.isLessonCompleted
            ).length;
            return (
              <AccordianComponent
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
