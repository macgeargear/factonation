"use client";

import { getCourses } from "@/lib/getCourse";
import { CourseDto } from "@/types/dto";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function Posts(courses: CourseDto) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const courses = await axios.get("http://localhost:8000/course");
      return courses;
    },
    // initialData: courses
  });

  // ...
}
