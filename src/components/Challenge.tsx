import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Challenge as ChallengeType } from "../types";

interface ChallengeProps {
  challenge: ChallengeType;
}

export default function Challenge({ challenge }: ChallengeProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isCorrect = selectedAnswer === challenge.correctAnswer;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{challenge.question}</h2>
      <div className="space-y-4 mb-6">
        {challenge.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => !isSubmitted && setSelectedAnswer(index)}
            className={`w-full text-left p-4 rounded-lg border ${
              selectedAnswer === index
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-500"
            } ${isSubmitted ? "pointer-events-none" : ""}`}
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedAnswer === null || isSubmitted}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Answer
      </button>
      {isSubmitted && (
        <div
          className={`mt-4 p-4 rounded-lg ${isCorrect ? "bg-green-100" : "bg-red-100"}`}
        >
          {isCorrect ? (
            <div className="flex items-center text-green-800">
              <CheckCircle className="w-5 h-5 mr-2" />
              Correct! Well done.
            </div>
          ) : (
            <div className="flex items-center text-red-800">
              <XCircle className="w-5 h-5 mr-2" />
              Incorrect. The correct answer was:{" "}
              {challenge.answers[challenge.correctAnswer]}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
