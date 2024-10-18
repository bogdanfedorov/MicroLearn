import { NextResponse } from "next/server";
import { connectToDatabase, idView } from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const courses = await db.collection("courses").find({}).toArray();
    return NextResponse.json(courses.map(idView));
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { title, description, category, duration, lessons } =
      await req.json();
    const { db } = await connectToDatabase();

    const result = await db.collection("courses").insertOne({
      title,
      description,
      category,
      duration,
      lessons,
      createdBy: session.user.id,
      createdAt: new Date(),
      rating: 0,
      ratingCount: 0,
    });

    return NextResponse.json(
      { message: "Course created successfully", courseId: result.insertedId },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
