import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { LessonDto } from "@/types/dto";
import { cn } from "@/lib/utils";
import { PlayCircleIcon } from "lucide-react";

interface AccordianComponentProps {
  params: {
    courseId: string;
  };
  lesson: any;
  key: number;
  completedLesson: number;
  week: number;
}

const AccordianComponent: FC<AccordianComponentProps> = ({
  params,
  lesson,
  completedLesson,
  key,
  week,
}) => {
  return (
    <Accordion
      type="multiple"
      className="border-secondary-button border-b mx-auto decoration-none no-scrollbar"
    >
      <AccordionItem value={String(lesson.length)} className="border-none mx-6">
        <AccordionTrigger className="underline-none">
          <div className="flex items-center gap-8 justify-between">
            <h1 className="font-semibold">{`Week ${week + 1}`}</h1>
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
                  "hover:bg-secondary-button rounded-lg ease-in-out duration-200"
                )}
              >
                <Link
                  href={`/dashboard/learn/course/${params.courseId}/video/${l.id}`}
                  className={cn(
                    "text-accent flex items-center justify-between hover:cursor-pointer"
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
};

export default AccordianComponent;
