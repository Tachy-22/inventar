"use client";

import { Question } from "@/types/types";
import { Button } from "./ui/button";
import { useQuiz } from "@/context/QuizContext";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useCallback, useState } from "react";

export function QuizQuestion({ question }: { question: Question }) {
  const { dispatch } = useQuiz();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Calculate width percentage based on section
  const getProgressWidth = useCallback(() => {
    return `${question.id * 12.5}%`; // Assuming 4 sections, adjust multiplier as needed
  }, [question.id]);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setSelectedOption(null);
      dispatch({
        type: "ANSWER_QUESTION",
        questionId: question.id,
        score: selectedOption,
      });
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  return (
    <div className="space-y-6 lg:max-w-2xl mx-auto p-2  lg:p-8 bg-white rounded-lg shadow-lg">
      {question.section && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-primary">
            {question.section}
          </h3>
          <div
            className="h-1 bg-primary mt-1 transition-all duration-500"
            style={{ width: getProgressWidth() }}
          ></div>
        </div>
      )}
      <h2 className="text-2xl font-bold text-gray-800">{question.text}</h2>
      {question.description && (
        <p className="text-gray-600 mt-2">{question.description}</p>
      )}
      <RadioGroup
        key={question.id}
        onValueChange={(value) => setSelectedOption(parseInt(value))}
        className="space-y-4 mt-6"
      >
        {question.options.map((option, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <RadioGroupItem
              value={option.score.toString()}
              id={`option-${index}`}
            />
            <Label
              className="text-gray-700 cursor-pointer"
              htmlFor={`option-${index}`}
            >
              {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <Button
        onClick={handleSubmit}
        disabled={selectedOption === null}
        className="w-full mt-6 bg-primary hover:bg-primary/80"
      >
        Next Question
      </Button>
    </div>
  );
}
