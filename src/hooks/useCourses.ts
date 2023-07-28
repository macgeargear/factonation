import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/api/course/courses";
import axios from "axios";
import { CourseDto } from "@/types/dto";
import { getCourses } from "@/lib/getCourse";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCourses(): {
  courses: { status: string; data: CourseDto[] };
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/course",
    fetcher
  );
  console.log(data);
  return {
    courses: data,
    isLoading,
    isError: error,
  };
}

const userFetcher = (url: string) =>
  fetch(url, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }).then((res) => res.json());

export function useUsersCourses(): {
  courses: { status: string; data: CourseDto[] };
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/course/student/enrolled",
    userFetcher
  );
  console.log(data);
  return {
    courses: data,
    isLoading,
    isError: error,
  };
}
