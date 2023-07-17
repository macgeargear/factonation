import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/api/course/courses";
import axios from "axios";
import { CourseDto } from "@/types/dto";
import { getCourses } from "@/lib/getCourse";

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
    // initialData: courses,
  });
  // ...
}
