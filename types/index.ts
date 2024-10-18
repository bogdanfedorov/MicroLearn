import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface User {
  id: string;
  name: string;
  email: string;
  coursesCompleted: number;
  challengesWon: number;
  currentStreak: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number;
  lessons: Lesson[];
  createdBy: string;
  createdAt: Date;
  rating: number;
  ratingCount: number;
}

export interface Lesson {
  title: string;
  duration: number;
  content?: string;
}

export interface Challenge {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: number;
}

export interface CourseProgress {
  courseId: string;
  title: string;
  progress: number;
}
