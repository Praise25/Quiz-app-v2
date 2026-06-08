"use client";

import { createContext } from "react";
import { useState } from "react";
import { type Subject, type Answer } from "@/data/consts";
import { getSubject } from "@/utils/processData";

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  activeSubject: Subject;
  selectSubject: (subject: Subject) => Promise<void>;
  answers: Answer[];
  recordAnswer: (answer: Answer) => void;
  resetQuiz: () => void;
  isLoading: boolean;
}

export const AppContext = createContext<AppContextType | null>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSubject, setActiveSubject] = useState<Subject>({} as Subject);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  async function selectSubject(subject: Subject) {
    setIsLoading(true);
    const foundSubject = await getSubject(subject.title);
    setTimeout(() => {
      setActiveSubject({ ...subject, ...foundSubject });
      setIsLoading(false);
    }, 1000);
  }

  function recordAnswer(answer: Answer) {
    setAnswers((prev) => {
      return [...prev, answer];
    });
  }

  function resetQuiz() {
    setActiveSubject({} as Subject);
    setAnswers([]);
  }

  const ctxValue: AppContextType = {
    theme,
    toggleTheme,
    activeSubject,
    selectSubject,
    answers,
    recordAnswer,
    resetQuiz,
    isLoading,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
