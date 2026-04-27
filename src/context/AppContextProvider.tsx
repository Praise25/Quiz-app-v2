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
  selectSubject: (subject: Subject) => void;
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
  const [activeSubject, setActiveSubject] = useState<Subject>({} as Subject);
  const [answers, setAnswers] = useState<Answer[]>([]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  async function selectSubject(subject: Subject) {
    const foundSubject = await getSubject(subject.title);
    setActiveSubject({ ...subject, ...foundSubject });
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
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
