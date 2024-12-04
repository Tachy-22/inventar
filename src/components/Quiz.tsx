"use client";

import { questions } from "@/data/questions";
import { useQuiz } from "@/context/QuizContext";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";
import { RESULT_RANGES } from "@/constants/results";

export function Quiz() {
  const { state } = useQuiz();

  if (state.isComplete || state.currentQuestionIndex >= questions.length) {
    const totalScore = Object.values(state.answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    const resultRange = RESULT_RANGES.find(
      range => totalScore >= range.min && totalScore <= range.max
    );

    const results = {
      totalScore,
      maxScore,
      percentage,
      recommendation: resultRange?.description || "Thank you for completing the quiz!"
    };
    
    return <QuizResults results={results} />;
  }

  return (
    <div className="max-w-2xl mx-auto p-2 lg:p-6">
      <div className="mb-4">
        Question {state.currentQuestionIndex + 1} of {questions.length}
      </div>
      <QuizQuestion 
        question={questions[state.currentQuestionIndex]} 
      />
    </div>
  );
}