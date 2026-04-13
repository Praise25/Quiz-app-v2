"use client";

import LinkButton from "@/ui/LinkButton";

import { Rubik } from "next/font/google";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContextProvider";
import { motion } from "motion/react";

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

  function handleChangeQuestion() {
    setCurrentQuestionIndex((prev) => {
      if (prev < questions.length - 1) {
        return prev + 1;
      } else {
        return 0; // or reset to 0 if you want to loop back to the first question
      }
    });
  }

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

        <div className="flex border-6 border-white rounded-full bg-(--white) lg:mb-20 lg:border-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${((activeQuestion?.id || 1) / questions.length) * 100}%`,
            }}
            className={`h-2 rounded-full ${activeSubject?.buttonBackgroundColor}`}
          ></motion.div>
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

        <motion.button
          className={`${rubikMedium.className} text-lg/[100%] text-(--white) flex justify-center items-center w-full h-14 p-4 mt-4 rounded-xl ${activeSubject?.buttonBackgroundColor || "bg-(--purple-600)"} shadow-[0 16px 40px rgb(143 160 193 / 14%)]`}
          onClick={handleChangeQuestion}
          whileHover={{
            backgroundColor: `var(${activeSubject?.hoverBackgroundColor})`,
          }}
        >
          Submit Answer
        </motion.button>
      </div>
    </main>
  );
}
