"use client";

import { useQuiz } from "@/context/QuizContext";
import { questions } from "@/data/questions";
import { Button } from "./ui/button";
import { WaitlistForm } from "./WaitlistForm";
import { BookingForm } from "./BookingForm";
import { RESULT_RANGES, CALL_TO_ACTION } from "@/constants/results";
import { Results } from "@/types/types";

export function QuizResults({ results }: { results: Results }) {
  const resultRange =
    RESULT_RANGES.find(
      (range) =>
        results.totalScore >= range.min && results.totalScore <= range.max
    ) || RESULT_RANGES[0];

  return (
    <div className="w-full mx-auto p-2  lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Score section */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 lg:sticky lg:top-6 lg:self-start">
          <h2 className="text-3xl font-bold text-primary">
            Your Score & Profit-Boosting Insights
          </h2>
          <div className="text-2xl font-semibold">
            Score: {results.totalScore} / {results.maxScore}{" "}
            <span className="text-primary">({results.percentage}%)</span>
          </div>
          {resultRange && (
            <>
              <h3 className="text-xl font-bold text-primary">
                {resultRange.title}
              </h3>
              <p className="text-gray-700">{results.recommendation}</p>
            </>
          )}
          <h2 className="text-2xl font-bold text-primary">
            {CALL_TO_ACTION.title}
          </h2>
          <p className="text-gray-700">{CALL_TO_ACTION.mainText}</p>

          {/* Benefits section */}
          <div className="space-y-3">
            <h3 className="font-semibold">
              Here&apos;s what you&apos;ll gain with our solution:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {CALL_TO_ACTION.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold">The best part?</p>
            <p className="text-gray-700">{CALL_TO_ACTION.closingText}</p>
          </div>
          <p className="text-sm text-gray-600 text-center border-y py-6">
            {CALL_TO_ACTION.urgencyText}
          </p>
        </div>

        {/* Main CTA section */}
        <div className="bg-white rounded-lg shadow-lg px-6 pb-4 space-y-6">
          <div className="space-y-6">
            {/* Strategy Call Section */}
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">
                Book Your Free Inventory Analysis Call !!!
              </h3>
              <p className="text-gray-700 mb-4">
                Let&apos;s analyze your inventory challenges together. During
                this free consultation, we&apos;ll:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  Discover hidden revenue opportunities in your current
                  operations
                </li>
                <li>
                  Get actionable strategies to increase your profit margins
                </li>
                <li>
                  Build a customized revenue growth roadmap for your business
                </li>
              </ul>
              <BookingForm />
            </div>

            {/* Waitlist Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Not ready to book? Join our waitlist
              </h3>
              <p className="text-gray-600 mb-4">
                Get exclusive tips and be the first to know about special
                offers.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
