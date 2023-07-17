import { CourseDto } from "@/types/dto";

export async function fetchCourses(): Promise<CourseDto[]> {
  const res = await fetch("http://localhost:8000/course");
  const coursesData = await res.json();
  return coursesData.data;
}
