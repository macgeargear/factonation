import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/Button";
import { CourseWithLessonDto } from "@/types/dto";

interface HeaderProps {
  course: CourseWithLessonDto;
}

const Header: FC<HeaderProps> = ({ course }) => {
  return (
    <div className="bg-[#0B0E0C] h-[379px] py-24 opacity-90 text-secondary-button">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-semibold">{course.courseName}</h1>
          <p className="text-lg font-medium">
            Way to go! Here are all the courses you’ve finished.
          </p>
          <Link
            href={`/dashboard/learn/course/${course.id}`}
            className={cn(
              buttonVariants({ size: "xl" }),
              "bg-secondary-button",
              "text-[#222]",
              "w-fit"
            )}
          >
            Go to course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
