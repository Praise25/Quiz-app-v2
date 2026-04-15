"use client";

import { createContext } from "react";
import { useState } from "react";
import { type Subject } from "@/data/consts";
import { getSubject } from "@/utils/processData";

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  activeSubject: Subject;
  selectSubject: (subject: Subject) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSubject, setActiveSubject] = useState<Subject>({} as Subject);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  async function selectSubject(subject: Subject) {
    const foundSubject = await getSubject(subject.title);
    setActiveSubject({ ...subject, ...foundSubject });
  }

  const ctxValue: AppContextType = {
    theme,
    toggleTheme,
    activeSubject,
    selectSubject,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
