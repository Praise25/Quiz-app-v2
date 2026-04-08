"use client"

import { createContext } from "react";
import { useState } from "react";
import { type Subject } from "@/data/consts";

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  activeSubject: Subject | null;
  selectSubject: (subject: Subject) => void;
}

const initialValues: AppContextType = {
  theme: "light",
  toggleTheme: () => {},
  activeSubject: null,
  selectSubject: () => {},
}

export const AppContext = createContext(initialValues);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  function selectSubject(subject: Subject) {
    setActiveSubject(subject);
  }

  const ctxValue: AppContextType = {
    theme,
    toggleTheme,
    activeSubject,
    selectSubject,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
