"use client";

import LinkButton from "@/ui/LinkButton";

import { Rubik } from "next/font/google";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContextProvider";

const rubikMedium = Rubik({
  weight: "500",
});

const rubikItalic = Rubik({
  weight: "400",
  style: "italic",
});

const optionLetters = ["A", "B", "C", "D", "E"];

export default function Questions() {
  const { activeSubject } = useContext(AppContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = activeSubject?.questions || [];
  const activeQuestion = questions[currentQuestionIndex] || {
    id: 0,
    question: "No question available",
    options: [],
    answer: "",
  };

  return (
    <main className="mt-8 relative z-100 lg:flex lg:mt-12 lg:gap-16 xl:gap-32">
      <div className="lg:flex lg:flex-col lg:flex-1 lg:justify-between">
        <div>
          <p
            className={`${rubikItalic.className} text-sm/[150%] text-(--grey-500) lg:text-lg`}
          >
            {`Question ${activeQuestion.id} of ${questions.length}`}
          </p>
          <h1
            className={`${rubikMedium.className} text-[1.25rem]/[120%] mt-2 mb-6 lg:text-[1.5rem] xl:text-[2.5rem]`}
          >
            {activeQuestion.question}
          </h1>
        </div>

        <div className="flex border-6 border-white rounded-full lg:mb-20 lg:border-2">
          <progress
            className={`progress progress-primary w-full ${activeSubject?.iconColor} bg-(--white)`}
            value="40"
            max="100"
          ></progress>
        </div>
      </div>

      <div className="lg:flex lg:flex-col lg:flex-1">
        <ul className="mt-10 flex flex-col gap-4 lg:flex-1 lg:mt-0 ">
          {activeQuestion.options.map((option, index) => (
            <li
              key={`${activeQuestion.id}-${index}`}
              className="rounded-xl bg-(--white) border border-(--grey-50)"
            >
              <LinkButton
                className={`${rubikMedium.className} text-lg lg:text-[1.375rem]`}
              >
                <div
                  className={`flex justify-center items-center w-10 h-10 mr-4 rounded-md p-2 bg-(--grey-50) text-(--grey-500)`}
                >
                  {optionLetters[index]}
                </div>
                {option}
              </LinkButton>
            </li>
          ))}
        </ul>

        <button
          className={`${rubikMedium.className} text-lg/[100%] text-(--white) flex justify-center items-center w-full h-14 p-4 mt-4 rounded-xl ${activeSubject?.buttonBackgroundColor || "bg-(--purple-600)"} shadow-[0 16px 40px rgb(143 160 193 / 14%)]`}
        >
          Submit Answer
        </button>
      </div>
    </main>
  );
}
