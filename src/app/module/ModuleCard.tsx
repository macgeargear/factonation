import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { CourseDto } from "@/types/dto";

import { FC } from "react";
import Link from "next/link";

interface ModuleCardProps {
  course: CourseDto;
}

const ModuleCard: FC<ModuleCardProps> = ({ course }) => {
  return (
    <div className="flex flex-col gap-6 mx-auto">
      <div className="flex gap-5 rounded-xl w-[920px] h-[340px] bg-neutral-100 px-6 items-center drop-shadow-md ">
        <div className="maw-w-[460px] max-h-[280px] grid place-content-center overflow-hidden">
          <Image
            src={course.imageUrl}
            alt="Industry image"
            className=""
            width={1080}
            height={1920}
          />
        </div>
        <div className="flex flex-col w-[710px] h-[320px] p-2 gap-3 justify-center">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-primary-button">{course.courseName}</p>
            <p className="text-xl font-semibold">{course.courseName}</p>
            <p className="text-sm text-stone-600">{course.details}</p>
            <p className="text-xs font-semibold">
              จำนวนวิดีโอ {course.lessons.length} วิดีโอ
            </p>
          </div>
          <div className="flex gap-10 justify-between border-t border-primary-button py-1 ">
            <p className="text-xs font-semibold my-2  bg-neutral-100">{4000}</p>
            <div className="flex items-center gap-0">
              <Link
                href={`/dashboard/courseOverview/${course.id}`}
                className="text-xs font-semibold bg-neutral-100"
              >
                ดูรายละเอียดคอร์์ส
              </Link>
              <ArrowRight size={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
