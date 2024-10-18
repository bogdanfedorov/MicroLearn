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
  rating: number;
  duration: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
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
