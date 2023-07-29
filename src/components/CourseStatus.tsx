import { useCourseStatus } from "@/hooks/useCourseStatus";
import { FC } from "react";

interface CourseStatusProps {
  courseId: string;
  studentId: string;
}

const CourseStatus: FC<CourseStatusProps> = ({ courseId, studentId }) => {
  const { status, isError, isLoading } = useCourseStatus(studentId, courseId);
  return <p>{status.data.percentage}</p>;
};

export default CourseStatus;
