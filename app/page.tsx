import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Master New Skills in Minutes
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Short, effective courses and exciting challenges to boost your
          expertise
        </p>
        <Button as={Link} href="/courses" color="primary" size="lg">
          Get Started
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Micro-Courses"
          description="Bite-sized lessons designed for busy professionals. Learn at your own pace."
        />
        <FeatureCard
          title="Skill Challenges"
          description="Put your skills to the test and compete with others in exciting challenges."
        />
        <FeatureCard
          title="Community"
          description="Connect with like-minded learners and share your progress."
        />
      </div>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader className="text-xl font-semibold">{title}</CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
}
