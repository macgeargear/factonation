/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Checkbox as RadixCheckBox } from "@radix-ui/react-checkbox";
import { useToast } from "@/components/ui/use-toast";
import { getLessonByCourseIdFormetted } from "@/lib/getLessons";
import { LessonDto } from "@/types/dto";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface pageProps {
  params: {
    videoId: string;
    courseId: string;
  };
}

async function toggleLesson(id: string) {
  const res = await fetch(`http://localhost:8000/lesson/toggle/${id}`, {
    method: "POST",
  });
  const status = await res.json();
  console.log(status);
}

const page: FC<pageProps> = ({ params: { videoId, courseId } }) => {
  const [lessons, setLessons] = useState<LessonDto[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState(false);
  const { toast } = useToast();
  // const lessons = await getLessonByModuleFormatted(courseId);
  useEffect(() => {
    const fetLessons = async () => {
      setLoading(true);
      const _lessons = await getLessonByCourseIdFormetted(courseId);
      setLessons(_lessons);
      setLoading(false);
    };
    fetLessons();
  }, [courseId]);

  let url: string = "";
  let id: string = "";
  let title: string = "";
  let desc: string = "";

  lessons.forEach((lesson: LessonDto[]) => {
    lesson.forEach((week: LessonDto) => {
      if (week.id == videoId) {
        url = week.videoUrl;
        title = week.title;
        desc = week.desc;
        id = week.id;
      }
    });
  });

  if (loading) return <div className="text-[#222]"></div>;
  return (
    <div className="flex gap-4 mt-16 flex-col items-center text-[#222] bg-background rounded-2xl px-12 py-6 mx-auto h-fit shadow-md">
      <div className="flex items-start justify-start flex-col gap-4 border-secondary-button my-2 border-b-[1px] w-full">
        <h1 className="text-3xl font-semibold my-2">{title}</h1>
        <p className="mb-2">{desc}</p>
      </div>
      <ReactPlayer controls url={url} style={{ width: "full" }} />
      <div className="flex items-center gap-4">
        <label
          htmlFor="terms"
          className="text-sm leading-none justify-self-end"
        >
          Mark as completed
        </label>
        <RadixCheckBox
          checked={complete}
          className="p-4 rounded-xl bg-secondary-button"
          id="terms"
          onClick={async () => {
            setComplete((prev) => !prev);
            const descMsg = complete
              ? `You finished this lesson`
              : `come back to learn!`;
            await toggleLesson(id);
            toast({
              duration: 3000,

              className: "bg-primary-button",
              title,
              description: descMsg,
            });
          }}
        />
      </div>
    </div>
  );
};

export default page;
