/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { getLessonByModuleFormatted } from "@/lib/getLessons";
import { LessonDto } from "@/types/dto";
import { PlayCircleIcon, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  params: {
    courseId: number;
  };

  children: React.ReactNode;
}

const page: FC<layoutProps> = async ({ children, params }) => {
  const router = useRouter();
  const lessons: LessonDto[][] = await getLessonByModuleFormatted(
    params.courseId
  );
  return (
    <div className="flex gap-4 h-full bg-background">
      <div className="bg-[#fff] w-[380px] max-h-screen overflow-scroll flex gap-2 flex-col  justify-start text-[#222] border-r-secondary-button border-r-[1px]">
        <div className="p-4 border-secondary-button border-b ">
          {/* <h1 className="font-medium text-xl">{title}</h1> */}
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
          {lessons.map((lesson, i) => {
            const completedLesson = lesson.filter(
              (l) => l.isLessonCompleted
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
                    <div className="flex items-center gap-8">
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
                          className="hover:bg-secondary-button rounded-lg ease-in-out duration-200"
                          onClick={() =>
                            router.push(
                              `/course/learn/course/${params.courseId}/video/${l.id}`
                            )
                          }
                        >
                          <div className="flex items-center justify-between">
                            <h1 className="text-accent">{l.title}</h1>
                            <PlayCircleIcon color={"#768f93"} />
                          </div>
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
