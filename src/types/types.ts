export interface Option {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  section: string;
  text: string;
  description: string;
  options: Option[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, number>;
  isComplete: boolean;
}

export interface Results {
  totalScore: number;
  maxScore: number;
  percentage: number;
  recommendation: string;
}

export interface WaitlistFormData {
  email: string;
  name: string;
  company: string;
}

export interface BookingFormData {
  email: string;
  name: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
}