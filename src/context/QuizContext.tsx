
"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { QuizState } from "@/types/types";

type QuizAction =
  | { type: "ANSWER_QUESTION"; questionId: number; score: number }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" }
  | { type: "RESET_QUIZ" };

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: {},
  isComplete: false,
};

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
} | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer((state: QuizState, action: QuizAction) => {
    switch (action.type) {
      case "ANSWER_QUESTION":
        return {
          ...state,
          answers: {
            ...state.answers,
            [action.questionId]: action.score,
          },
        };
      case "NEXT_QUESTION":
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
        };
      case "COMPLETE_QUIZ":
        return {
          ...state,
          isComplete: true,
        };
      case "RESET_QUIZ":
        return initialState;
      default:
        return state;
    }
  }, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within QuizProvider");
  return context;
};