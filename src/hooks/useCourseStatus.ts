import useSWR from "swr";

const fetcher = (url: string, studentId: string, courseId: string) =>
  fetch(url, { body: JSON.stringify({ studentId, courseId }) }).then((res) =>
    res.json()
  );

export function useCourseStatus(studentId: string, courseId: string) {
  const { data, error, isLoading } = useSWR(
    ["http://localhost:8000/lesson/status/course", studentId, courseId],
    fetcher
  );

  console.log(data);
  return {
    status: data,
    isLoading,
    isError: error,
  };
}
