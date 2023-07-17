import { FC } from "react";
import Header from "@/components/courseOverviewPage/Header";
import LessonList from "@/components/courseOverviewPage/LessonList";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCourse } from "@/lib/getCourse";
import { cn } from "@/lib/utils";
import { CourseWithLessonDto } from "@/types/dto";

interface DetailsProps {
  course: CourseWithLessonDto;
}

const whatYouWillLearns = [
  `ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand สัปดาห์ละ 2 วิดีโอ`,
  ` กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่เรียนในคอร์สเดียวกัน`,
];

const detailComponent = (arg: {
  desc?: string[];
  lessons?: number;
  title: string;
}): React.ReactNode => {
  return (
    <div className="flex flex-col py-4">
      <h1 className="font-bold text-2xl py-2">{arg.title}</h1>
      {arg.desc &&
        arg.desc.map((e, i) => {
          return (
            <li key={i} className="text-xl">
              {e}
            </li>
          );
        })}
      {arg.lessons && <p className="text-xl">{arg.lessons} วิดิโอ</p>}
    </div>
  );
};

const Details: FC<DetailsProps> = ({ course }) => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="rounded-xl border-[1px] p-4  bg-slate-50 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="67"
              viewBox="0 0 59 67"
              fill="none"
            >
              <path
                d="M29.5 0L58.5118 16.75V50.25L29.5 67L0.48815 50.25V16.75L29.5 0Z"
                fill="#0AC5A8"
              />
            </svg>
            <div className="flex flex-col px-4">
              <h1 className="text-[#222] font-semibold">{course.courseName}</h1>
              <p className="text-[#222] text-md">
                By completing this course, you&apos;ll be on your way to earning
                an Scada Developer - Associate certification.
              </p>
            </div>
          </div>
          <Button className="bg-primary-button min-w-fit">View project</Button>
        </div>
      </div>
      <div className="flex justify-between text-[#222] min-h-screen">
        <div className="flex flex-col">
          {detailComponent({
            lessons: course.lessons.length,
            title: "บทเรียน",
          })}
          {detailComponent({
            desc: whatYouWillLearns,
            title: "สิ่งที่คุณได้รับ",
          })}
          {detailComponent({
            desc: course.prerequisites,
            title: "สิ่งที่ควรรู้เบื้องต้น",
          })}
          <div className="flex flex-col py-4 ">
            <h1 className="font-bold text-2xl py-2">Instructor</h1>
            <div className="flex gap-4 items-center">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  className="rounded-full"
                  src="https://github.com/factonation.png"
                  alt="@Taro"
                />
                <AvatarFallback className="bg-primary-button">T</AvatarFallback>
              </Avatar>
              <p className="text-xl">Mr. {course.instructor.name}</p>
            </div>
          </div>
        </div>
        <LessonList course={course} />
      </div>
    </div>
  );
};

export default Details;
