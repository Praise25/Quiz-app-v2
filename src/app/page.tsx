"use client";

import SubjectList from "./components/SubjectList";
import { rubikLight, rubikMedium, rubikItalic } from "@/fonts/rubikFonts";
import { useEffect } from "react";
import { useAppContext } from "@/hooks/useAppContext";

export default function Home() {
  const { resetQuiz } = useAppContext();

  useEffect(() => {
    resetQuiz();
  }, [resetQuiz]);

  return (
    <main className="mt-8 relative z-100 lg:flex lg:mt-12 ">
      <header className="lg:flex lg:flex-col lg:flex-1">
        <h1
          className={`${rubikLight.className} text-[2.5rem]/[100%] xl:text-[4rem]`}
        >
          Welcome to the{" "}
          <span
            className={`${rubikMedium.className} block text-[2.5rem]/[100%] my-2 xl:text-[4rem]`}
          >
            Frontend Quiz!
          </span>
        </h1>
        <p
          className={`${rubikItalic.className} text-sm/[150%] text-(--grey-500) mt-4 xl:text-xlx`}
        >
          Pick a subject to get started.
        </p>
      </header>
      <SubjectList />
    </main>
  );
}
