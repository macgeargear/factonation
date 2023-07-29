"use client";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BookOpenCheckIcon, PresentationIcon } from "lucide-react";
import { useCourseStatus } from "@/hooks/useCourseStatus";

interface UserSummaryProps {
  courseId: string;
  studentId: string;
}

const UserSummary: FC<UserSummaryProps> = ({ courseId, studentId }) => {
  const courseStatus = useCourseStatus(studentId, courseId);
  console.log(courseStatus);
  return (
    <div className="rounded-xl p-6 bg-gray-100 flex flex-col gap-2 w-1/3 h-fit">
      <div className="flex flex-col items-center my-8">
        <Avatar className="w-24 h-24">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/factonation.png"
            alt="@shadcn"
          />
          <AvatarFallback className="bg-primary-button">F</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-semibold">Cookie Brownie</h1>
        <p>cookie@brownie.com</p>
      </div>
      <div className="flex flex-col justify-start px-4 gap-4 ">
        <h1 className="text-lg font-medium">course summary</h1>
        <div className="flex items-center justify-between rounded-xl bg-background px-8 py-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <PresentationIcon />
            <p className="text-md">Course Completed</p>
          </div>
          <p className="align-self-end px-4 py-2 bg-secondary-button rounded-xl">
            3
          </p>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-background px-8 py-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <BookOpenCheckIcon />
            <p className="text-md">Lessons Completed</p>
          </div>
          <p className="align-self-end px-4 py-2 bg-secondary-button rounded-xl">
            3
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSummary;
