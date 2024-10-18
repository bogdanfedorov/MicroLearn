import Link from "next/link";
import { Book, Award, TrendingUp } from "lucide-react";
import { User, CourseProgress } from "../../types";

export default function Dashboard() {
  // This data would typically come from an API or database
  const user: User = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    coursesCompleted: 3,
    challengesWon: 5,
    currentStreak: 7,
  };

  const inProgressCourses: CourseProgress[] = [
    { courseId: "1", title: "Advanced React Patterns", progress: 60 },
    { courseId: "2", title: "Data Visualization with D3.js", progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Book className="w-8 h-8 text-blue-500" />}
            label="Courses Completed"
            value={user.coursesCompleted}
          />
          <StatCard
            icon={<Award className="w-8 h-8 text-yellow-500" />}
            label="Challenges Won"
            value={user.challengesWon}
          />
          <StatCard
            icon={<TrendingUp className="w-8 h-8 text-green-500" />}
            label="Current Streak"
            value={`${user.currentStreak} days`}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">In Progress Courses</h2>
          <div className="space-y-4">
            {inProgressCourses.map((course) => (
              <div
                key={course.courseId}
                className="flex items-center justify-between"
              >
                <Link
                  href={`/courses/${course.courseId}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {course.title}
                </Link>
                <div className="w-1/3">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{value}</h3>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
}
