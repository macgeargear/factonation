import { LucideIcon, PresentationIcon } from "lucide-react";
import { FC } from "react";

interface CourseSummaryProps {
  icon: React.ReactNode;
  title: string;
  completeNumber: number;
  allLessonsNumber: number;
}

const CourseSummary: FC<CourseSummaryProps> = ({
  icon,
  title,
  completeNumber,
  allLessonsNumber,
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-background px-8 py-6 gap-4 shadow-sm">
      <div className="flex items-center gap-4">
        {icon}
        <p className="text-md">{title}</p>
      </div>
      <p className="align-self-end px-4 py-2 bg-secondary-button rounded-xl">
        {completeNumber} / {allLessonsNumber}
      </p>
    </div>
  );
};

export default CourseSummary;
