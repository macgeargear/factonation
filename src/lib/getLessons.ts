import { LessonDto } from "@/types/dto";

export async function getAllLesson(): Promise<LessonDto[]> {
  const res = await fetch(`http://localhost:8000/lesson`);
  const lessonData = await res.json();
  return lessonData.data;
}

export async function getLessonByCourseIdFormetted(courseId: string) {
  const res = await fetch(
    `http://localhost:8000/lesson/moduleAndweek/${courseId}`
  );
  const lessonData = await res.json();
  return lessonData.data;
}
