"use client";
import { useEffect, useState } from "react";
import { User, CourseProgress } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [inProgressCourses, setInProgressCourses] = useState<CourseProgress[]>(
    [],
  );

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch("/api/user");
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    }

    async function fetchInProgressCourses() {
      const response = await fetch("/api/user/courses");
      if (response.ok) {
        const data = await response.json();
        setInProgressCourses(data);
      }
    }

    fetchUserData();
    fetchInProgressCourses();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatCard label="Courses Completed" value={user.coursesCompleted} />
        <StatCard label="Challenges Won" value={user.challengesWon} />
        <StatCard label="Current Streak" value={`${user.currentStreak} days`} />
      </div>

      <h2 className="text-2xl font-bold mb-4">In Progress Courses</h2>
      <div className="space-y-4">
        {inProgressCourses.map((course) => (
          <Card key={course.courseId}>
            <CardHeader>{course.title}</CardHeader>
            <CardBody>
              <Progress value={course.progress} className="max-w-md" />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <Card>
      <CardHeader>{label}</CardHeader>
      <CardBody>
        <p className="text-2xl font-bold">{value}</p>
      </CardBody>
    </Card>
  );
}
