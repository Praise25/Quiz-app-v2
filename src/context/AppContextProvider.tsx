"use client";

import { createContext } from "react";
import { useState } from "react";
import { type Subject, type Answer } from "@/data/consts";

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  answers: Answer[];
  recordAnswer: (answer: Answer) => void;
  resetQuiz: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [answers, setAnswers] = useState<Answer[]>([]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  function recordAnswer(answer: Answer) {
    setAnswers((prev) => {
      return [...prev, answer];
    });
  }

  function resetQuiz() {
    setAnswers([]);
  }

  const ctxValue: AppContextType = {
    theme,
    toggleTheme,
    answers,
    recordAnswer,
    resetQuiz,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
