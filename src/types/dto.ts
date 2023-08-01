export interface CourseDto {
  id: string;
  courseName: string;
  details: string;
  imageUrl: string;
  prerequisites: string[];
  instructorId: string;
  students: string[];
  instructor: {
    id: string;
    name: string;
  };
  isCompleted: boolean;
  lessons: LessonDto[];
  enrollment: EnrollmentDto[];
  price: number;
}

export interface CourseWithLessonDto extends CourseDto {
  lessons: LessonDto[];
}

export interface LessonDto {
  id: string;
  title: string;
  week: number;
  desc: string;
  module: number;
  episode: number;
  videoUrl: string;
  order: number;
  courseId: string;
}

export interface CourseStatusDto {
  all: number;
  complete: number;
  percentage: number;
}

export enum Role {
  Admin = "Admin",
  Student = "Student",
}

export interface UserDto {
  id: string;
  enrollment: EnrollmentDto[];
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface EnrollmentDto {
  id: string;
  studentId: string;
  courseId: string;
  courseName: string;
}
