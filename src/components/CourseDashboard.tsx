import { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Progress } from "./ui/progress";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface CourseDashboardProps {
  courseName: string;
  module: number;
  isCompleted: boolean;
}

// TODO: Implement with table component
const CourseDashboard: FC<CourseDashboardProps> = ({
  courseName,
  module,
  isCompleted,
}) => {
  return (
    <>
      <div className="flex items-center justify-between rounded-lg px-10 py-8 bg-secondary-button">
        <h2 className="text-[#222] text-lg font-semibold">{courseName}</h2>
        <div className="w-full max-w-xl">
          <Progress value={10} className="bg-primary-button h-2" />
        </div>
        <h2 className="text-[#222]">Jun 19, 2023</h2>
        <Link
          href={`/course/learn/course/${module}`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "text-[#222] bg-[#fff] hover:bg-secondary-button hover:border-primary-button hover:border-2"
          )}
        >
          {isCompleted ? "Start" : "Review"}
        </Link>
      </div>
    </>
  );
};

export default CourseDashboard;
