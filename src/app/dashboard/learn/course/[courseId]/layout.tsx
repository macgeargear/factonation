/* eslint-disable react-hooks/rules-of-hooks */
"use client";
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
import { getLessonByModuleFormatted } from "@/lib/getLessons";
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

  useEffect(() => {
    const fetLessons = async () => {
      const _lessons = await getLessonByModuleFormatted(params.courseId);
      setLessons(_lessons);
    };

    fetLessons();
  }, [params.courseId]);

  useEffect(() => {
    const fetchCourse = async () => {
      const _course = await getCourse(params.courseId.toString());
      console.log(_course);
      setCourse(_course);
    };

    fetchCourse();
  }, [params.courseId]);

  // const [title, setTitle] = useState<string>(lessons[0][0].title);
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
          <p>0% Complete</p>
        </div>
        <div className="">
          {lessons.map((lesson: any, i: number) => {
            const completedLesson = lesson.filter(
              (l: any) => l.isLessonCompleted
            ).length;
            return (
              <Accordion
                key={i}
                type="multiple"
                className="border-secondary-button border-b mx-auto decoration-none no-scrollbar"
              >
                <AccordionItem
                  key={i}
                  value={String(lesson.length)}
                  className="border-none mx-6"
                >
                  <AccordionTrigger className="underline-none">
                    <div className="flex items-center gap-8 justify-between">
                      <h1 className="font-semibold">{`Week ${i + 1}`}</h1>
                      <p className="py-1 text-md px-2 rounded-2xl bg-secondary-button border-accent border">
                        {`${completedLesson} / ${lesson.length}`}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <div className="flex flex-col my-2 rounded-lg">
                    {lesson.map((l: LessonDto) => {
                      return (
                        <AccordionContent
                          key={l.id}
                          className={cn(
                            "hover:bg-secondary-button rounded-lg ease-in-out duration-200 my-1",
                            {
                              "bg-complete": l.isLessonCompleted,
                              "hover:bg-complete": l.isLessonCompleted,
                            }
                          )}
                        >
                          <Link
                            href={`/dashboard/learn/course/${params.courseId}/video/${l.id}`}
                            // onClick={() =>
                            //   setTitle(lessons[params.courseId][i].title)
                            // }
                            className={cn(
                              "text-accent flex items-center justify-between hover:cursor-pointer",
                              { "text-[#fff]": l.isLessonCompleted }
                            )}
                          >
                            <p>{l.title}</p>
                            <PlayCircleIcon color={"#768f93"} />
                          </Link>
                        </AccordionContent>
                      );
                    })}
                  </div>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
};

export default page;
