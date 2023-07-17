import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/api/course/courses";
import axios from "axios";
import { CourseDto } from "@/types/dto";
import { getCourse, getCourses } from "@/lib/getCourse";

export function useCourse(id: string) {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => await getCourse(id),
    // initialData: ,
  });
  // ...
}
