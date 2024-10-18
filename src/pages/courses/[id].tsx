import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft, CheckCircle, Play } from "lucide-react";
import Link from "next/link";
import { Course, Lesson } from "../../types";

export default function CourseDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // This would typically come from an API or database
  const course: Course = {
    id: id as string,
    title: "Introduction to React",
    description:
      "Learn the basics of React, including components, state, and props.",
    category: "Programming",
    rating: 4.8,
    duration: 60,
    lessons: [
      { id: "1", title: "React Fundamentals", duration: 8 },
      { id: "2", title: "Components and Props", duration: 10 },
      { id: "3", title: "State and Lifecycle", duration: 12 },
      { id: "4", title: "Handling Events", duration: 7 },
      { id: "5", title: "Conditional Rendering", duration: 9 },
    ],
  };

  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/courses"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            {course.title}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
          <p className="text-gray-600">{course.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Lessons</h2>
          <div className="space-y-4">
            {course.lessons.map((lesson, index) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                index={index}
                currentLesson={currentLesson}
                setCurrentLesson={setCurrentLesson}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

interface LessonItemProps {
  lesson: Lesson;
  index: number;
  currentLesson: number;
  setCurrentLesson: (index: number) => void;
}

function LessonItem({
  lesson,
  index,
  currentLesson,
  setCurrentLesson,
}: LessonItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center">
        {index <= currentLesson ? (
          <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
        ) : (
          <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3" />
        )}
        <span className="font-medium">{lesson.title}</span>
      </div>
      <div className="flex items-center">
        <span className="text-sm text-gray-600 mr-4">
          {lesson.duration} min
        </span>
        <button
          onClick={() => setCurrentLesson(index)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Play className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
