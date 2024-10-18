"use client";
import { useEffect, useState } from "react";
import { Course } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("/api/courses");
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Card as={Link} href={`/courses/${course.id}`} isPressable>
      <CardHeader className="font-bold text-large">{course.title}</CardHeader>
      <CardBody>
        <p className="text-small text-default-500">{course.category}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-small">{course.rating}</span>
          </div>
          <span className="text-small text-default-500">
            {course.duration} min
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
