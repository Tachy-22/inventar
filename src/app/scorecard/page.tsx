import { CallToAction } from "@/components/CallToAction";
import { Quiz } from "@/components/Quiz";
import { QuizProvider } from "@/context/QuizContext";

export default function page() {
  return (
    <main className="container mx-auto">
      <CallToAction />
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </main>
  );
}
