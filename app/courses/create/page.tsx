"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Minus } from "lucide-react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";

export default function CreateCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [lessons, setLessons] = useState([{ title: "", duration: "" }]);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAddLesson = () => {
    setLessons([...lessons, { title: "", duration: "" }]);
  };

  const handleRemoveLesson = (index: number) => {
    const newLessons = lessons.filter((_, i) => i !== index);
    setLessons(newLessons);
  };

  const handleLessonChange = (
    index: number,
    field: "title" | "duration",
    value: string,
  ) => {
    const newLessons = [...lessons];
    newLessons[index][field] = value;
    setLessons(newLessons);
    const totalDuration = newLessons.reduce(
      (minuts, lesson) => minuts + Number(lesson.duration),
      0,
    );
    setDuration(`${totalDuration}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          category,
          duration: parseInt(duration),
          lessons: lessons.map((lesson) => ({
            ...lesson,
            duration: parseInt(lesson.duration),
          })),
        }),
      });

      if (response.ok) {
        router.push("/courses");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to create course");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex justify-center">
          <h1 className="text-2xl font-bold">Create New Course</h1>
        </CardHeader>
        <CardBody>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Course Title"
              placeholder="Enter course title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Textarea
              label="Course Description"
              placeholder="Enter course description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Select
              label="Category"
              placeholder="Select a category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <SelectItem key="programming" value="Programming">
                Programming
              </SelectItem>
              <SelectItem key="design" value="Design">
                Design
              </SelectItem>
              <SelectItem key="business" value="Business">
                Business
              </SelectItem>
              <SelectItem key="marketing" value="Marketing">
                Marketing
              </SelectItem>
            </Select>
            <Input
              label="Total Duration (minutes)"
              type="number"
              placeholder="Enter total course duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Lessons</h2>
              {lessons.map((lesson, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    label={`Lesson ${index + 1} Title`}
                    placeholder="Enter lesson title"
                    value={lesson.title}
                    onChange={(e) =>
                      handleLessonChange(index, "title", e.target.value)
                    }
                    required
                  />
                  <Input
                    label="Duration (minutes)"
                    type="number"
                    placeholder="Enter lesson duration"
                    value={lesson.duration}
                    onChange={(e) =>
                      handleLessonChange(index, "duration", e.target.value)
                    }
                    required
                  />
                  <Button
                    isIconOnly
                    color="danger"
                    aria-label="Remove lesson"
                    onClick={() => handleRemoveLesson(index)}
                    disabled={lessons.length === 1}
                  >
                    <Minus />
                  </Button>
                </div>
              ))}
              <Button onClick={handleAddLesson} color="secondary">
                <Plus className="mr-2" />
                Add Lesson
              </Button>
            </div>
            <Button type="submit" color="primary">
              Create Course
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
