"use client";

import Option from "./components/Option";
import ProgressBar from "@/app/components/ui/ProgressBar";
import DismissIcon from "@/assets/dismiss.svg";
import GenericButton from "../components/ui/GenericButton";
import clsx from "clsx";

import { useState } from "react";
import { rubikItalic, rubikMedium } from "@/fonts/rubikFonts";
import { useAppContext } from "@/hooks/useAppContext";
import { type Answer } from "@/data/consts";
import { useRouter } from "next/navigation";

const optionLetters = ["A", "B", "C", "D", "E"];

export default function Questions() {
  const { activeSubject, recordAnswer } = useAppContext();
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAttemptedSubmission, setHasAttemptedSubmission] = useState(false);
  const router = useRouter();

  const questions = activeSubject.questions || [];
  const activeQuestion = questions[currentQuestionIndex] || {
    id: 0,
    question: "No question available",
    options: [],
    correctAnswer: "",
  };
  const onLastQuestion = currentQuestionIndex === questions.length - 1;

  function handleSelectOption(option: string) {
    if (!hasSubmitted) {
      setSelectedOption(option);
    }
  }

  function handleSubmitAnswer() {
    setHasAttemptedSubmission(true);

    if (!hasSubmitted && selectedOption) {
      setHasSubmitted(true);

      const answer: Answer = {
        id: activeQuestion.id,
        chosenAnswer: selectedOption,
        isCorrect: selectedOption === activeQuestion.answer,
      };

      recordAnswer(answer);
    }

    if (hasSubmitted) {
      setHasSubmitted(false);
      setSelectedOption("");
      setHasAttemptedSubmission(false);
      setCurrentQuestionIndex((prev) => {
        if (prev < questions.length - 1) {
          return prev + 1;
        } else {
          return prev;
        }
      });

      if (onLastQuestion) {
        router.push("score");
      }
    }
  }

  function handleHoverStart() {
    if (hasAttemptedSubmission && !selectedOption) {
      return;
    } else {
      setIsHovering(true);
    }
  }

  function handleHoverEnd() {
    setIsHovering(false);
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
          innerDivStyle={`h-2 rounded-full ${activeSubject.primaryBackgroundColor}`}
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
              correctAnswer={activeQuestion.answer}
              hasSubmitted={hasSubmitted}
              onClick={() => handleSelectOption(option)}
            />
          ))}
        </ul>

        <GenericButton
          className={clsx(
            `${rubikMedium.className} ${activeSubject.primaryBackgroundColor || "bg-(--purple-600)"}`,
            isHovering && activeSubject.hoverBackgroundColor,
            hasAttemptedSubmission && !selectedOption && "opacity-50",
          )}
          type="button"
          onClick={handleSubmitAnswer}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {hasSubmitted
            ? onLastQuestion
              ? "View Score"
              : "Next Question"
            : "Submit Answer"}
        </GenericButton>
        <div
          className={clsx(
            "flex justify-center items-center text-(--red-500) pl-1 gap-2",
            hasAttemptedSubmission && !selectedOption ? "block" : "hidden",
          )}
        >
          <DismissIcon width="30" height="30" />
          <p>Please select an answer</p>
        </div>
      </div>
    </main>
  );
}
