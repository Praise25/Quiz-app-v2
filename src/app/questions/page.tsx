"use client";

import Option from "./components/Option";
import ProgressBar from "@/ui/ProgressBar";

import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContextProvider";
import { motion } from "motion/react";
import { rubikItalic, rubikMedium } from "@/fonts/rubikFonts";

const optionLetters = ["A", "B", "C", "D", "E"];

export default function Questions() {
  const { activeSubject } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = activeSubject?.questions || [];
  const activeQuestion = questions[currentQuestionIndex] || {
    id: 0,
    question: "No question available",
    options: [],
    answer: "",
  };

  function handleSelectOption(option: string) {
    setSelectedOption(option);
  }

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

        {/* custom progress bar to enable animation in it */}
        <ProgressBar
          outerDivStyle="flex border-6 border-white rounded-full bg-(--white) lg:mb-20 lg:border-2"
          innerDivStyle={`h-2 rounded-full ${activeSubject?.buttonBackgroundColor}`}
          initial={{ width: "0" }}
          animate={{
            width: `${((activeQuestion?.id || 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      <div className="lg:flex lg:flex-col lg:flex-1">
        <ul className="mt-10 flex flex-col gap-4 lg:flex-1 lg:mt-0 ">
          {activeQuestion.options.map((option, index) => (
            <Option
              key={`${activeQuestion.id}-${index}`}
              subject={activeSubject}
              letter={optionLetters[index]}
              option={option}
              selectedOption={selectedOption}
              onClick={() => handleSelectOption(option)}
            />
          ))}
        </ul>

        <motion.button
          className={`${rubikMedium.className} text-lg/[100%] text-(--white) flex justify-center items-center w-full h-14 p-4 mt-4 rounded-xl ${activeSubject?.buttonBackgroundColor || "bg-(--purple-600)"} shadow-[0 16px 40px rgb(143 160 193 / 14%)]`}
          onClick={handleChangeQuestion}
          type="button"
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
