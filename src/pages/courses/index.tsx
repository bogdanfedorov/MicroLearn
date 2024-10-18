import Link from "next/link";
import { Star, Clock } from "lucide-react";
import { Course } from "../../types";

export default function CoursesPage() {
  // This would typically come from an API or database
  const courses: Course[] = [
    {
      id: "1",
      title: "Introduction to React",
      category: "Programming",
      rating: 4.8,
      duration: 60,
      description: "",
      lessons: [],
    },
    {
      id: "2",
      title: "Digital Marketing Basics",
      category: "Marketing",
      rating: 4.6,
      duration: 45,
      description: "",
      lessons: [],
    },
    {
      id: "3",
      title: "Productivity Hacks",
      category: "Personal Development",
      rating: 4.9,
      duration: 30,
      description: "",
      lessons: [],
    },
    {
      id: "4",
      title: "UI/UX Fundamentals",
      category: "Design",
      rating: 4.7,
      duration: 50,
      description: "",
      lessons: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{course.category}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-1" />
            <span className="text-sm">{course.duration} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
