import { CourseWithLessonDto } from "@/types/dto";
import {
  CheckCheckIcon,
  ClipboardListIcon,
  Code2Icon,
  LucideIcon,
  YoutubeIcon,
} from "lucide-react";
import { FC } from "react";

interface LessonListProps {
  course: CourseWithLessonDto;
}

const thisCourseIncludes: { icon: React.ReactNode; desc: string }[] = [
  { icon: <YoutubeIcon />, desc: "Videos" },
  { icon: <CheckCheckIcon />, desc: "multiple choice questions" },
  { icon: <ClipboardListIcon />, desc: "tasks" },
  { icon: <Code2Icon />, desc: "code challenges" },
];

const LessonList: FC<LessonListProps> = ({ course }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-2 ml-8">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-2xl py-9">Lesson List</h1>
          <p className="font-medium">({course.lessons.length})</p>
        </div>
        <div className="rounded-xl flex flex-col gap-3 text-xl my-2 p-8 border-[1px] border-primary-button">
          {course.lessons.map((lesson) => {
            return <p key={lesson.id}>{lesson.title}</p>;
          })}
        </div>
      </div>
      <div className="flex flex-col py-2 ml-8 min-w-[349px]">
        <h1 className="font-bold text-2xl py-9">Thie course includes</h1>
        <div className="rounded-xl flex flex-col gap-3 text-xl my-2 p-8 border-[1px] border-primary-button">
          {thisCourseIncludes.map((e, i) => {
            return (
              <div className="flex items-center gap-8" key={i}>
                {e.icon}
                <p className="text-xl">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LessonList;
