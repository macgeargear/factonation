"use client";
import { LessonDto } from "@/types/dto";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import axios from "axios";

interface AddLessonFormProps {
  lessons: LessonDto[];
  courseId: string;
  setLessons: Dispatch<SetStateAction<LessonDto[]>>;
}

/*
  id: string;
  title: string;
  week: number;
  desc: string;
  module: number;
  episode: number;
  videoUrl: string;
*/

const AddLessonForm: FC<AddLessonFormProps> = ({
  lessons,
  setLessons,
  courseId,
}) => {
  const [title, setTitle] = useState("");
  const [week, setWeek] = useState<number>();
  const [desc, setDesc] = useState("");
  const [module, setModule] = useState<number>();
  const [episode, setEpisode] = useState<number>();
  const [videoUrl, setVideoUrl] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const formData = {
        title,
        week,
        desc,
        module,
        episode: lessons.length ?? 1,
        order: lessons.length ?? 1,
        videoUrl,
        courseId,
      };
      // formData.append("lessons", lessons);

      await axios.post("http://localhost:8000/lesson", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(formData);
      // await fetch("http://localhost:8000/course", {
      //   method: "POST",
      //   body: JSON.stringify({ formData, caption }),
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Lessons</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Lessons</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col">
          <Label htmlFor="lessonName">ชื่อบทเรียน</Label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="lessonName"
            placeholder="Javascript expert"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <Label htmlFor="lessonName">คำอธิบาย</Label>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            id="lessonName"
            placeholder="Javascript expert"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <Label htmlFor="videoUrl">ลิงค์ วิดิโอ</Label>
          <input
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            type="text"
            id="videoUrl"
            placeholder="http://www.cookie.brownie.co.th/lesson-1"
            className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
          />
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Label htmlFor="videoUrl">คอรสที่</Label>
              <input
                value={module}
                onChange={(e) => setModule(Number(e.target.value))}
                type="text"
                id="videoUrl"
                placeholder="2"
                className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="videoUrl">สัปดาห์ที่</Label>
              <input
                value={week}
                onChange={(e) => setWeek(Number(e.target.value))}
                type="text"
                id="videoUrl"
                placeholder="18"
                className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
              />
            </div>
            {/* <div className="flex flex-col">
              <Label htmlFor="videoUrl">ตอนที่</Label>
              <input
                value={episode}
                onChange={(e) => setEpisode(lessons.length)}
                type="text"
                id="videoUrl"
                placeholder="18"
                className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
              />
            </div> */}
          </div>
          <Button type="submit" variant={"ghost"} className="">
            Add
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddLessonForm;
