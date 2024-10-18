import Link from "next/link";
import { ArrowRight, Book, Trophy, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MicroLearn</h1>
          <div className="space-x-4">
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">
              Courses
            </Link>
            <Link
              href="/challenges"
              className="text-blue-600 hover:text-blue-800"
            >
              Challenges
            </Link>
            <Link
              href="/login"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Master New Skills in Minutes
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Short, effective courses and exciting challenges to boost your
            expertise
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Book className="w-12 h-12 text-blue-600" />}
            title="Micro-Courses"
            description="Bite-sized lessons designed for busy professionals. Learn at your own pace."
          />
          <FeatureCard
            icon={<Trophy className="w-12 h-12 text-blue-600" />}
            title="Skill Challenges"
            description="Put your skills to the test and compete with others in exciting challenges."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-blue-600" />}
            title="Community"
            description="Connect with like-minded learners and share your progress."
          />
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2023 MicroLearn. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
