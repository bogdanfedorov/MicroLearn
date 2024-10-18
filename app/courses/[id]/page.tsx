"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Course } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";
import { Button } from "@nextui-org/button";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState(0);

  useEffect(() => {
    async function fetchCourse() {
      const response = await fetch(`/api/courses/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data);
      }
    }
    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <Button color="success" className="mb-4">
        Buy 0$
      </Button>
      <Card className="mb-8">
        <CardBody>
          <p>{course.description}</p>
        </CardBody>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Lessons</h2>
      <div className="space-y-4">
        {course.lessons.map((lesson, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="flex justify-between">
              <span className="font-medium">{lesson.title}</span>
              <span className="text-small text-default-500">
                {lesson.duration} min
              </span>
            </CardHeader>
            <CardBody>
              <span>{lesson.content}</span>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
