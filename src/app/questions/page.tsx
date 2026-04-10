"use client";

import LinkButton from "@/ui/LinkButton";

import { Rubik } from "next/font/google";
import { useContext } from "react";
import { AppContext } from "@/context/AppContextProvider";

const rubikMedium = Rubik({
  weight: "500",
});

const rubikItalic = Rubik({
  weight: "400",
  style: "italic",
});

const activeQuestion = {
  id: 1,
  question: "text question",
  options: [
    {
      id: 1,
      label: "4.5:1",
    },
    {
      id: 2,
      label: "3:1",
    },
    {
      id: 3,
      label: "7:1",
    },
    {
      id: 4,
      label: "5:1",
    },
  ],
};

const optionLetters = ["A", "B", "C", "D", "E"];

export default function Questions() {
  const { activeSubject } = useContext(AppContext);

  return (
    <main className="mt-8 relative z-100 lg:flex lg:mt-12 lg:gap-16 xl:gap-32">
      <div className="lg:flex lg:flex-col lg:flex-1 lg:justify-between">
        <div>
          <p
            className={`${rubikItalic.className} text-sm/[150%] text-(--grey-500) lg:text-lg`}
          >
            Question 6 of 10
          </p>
          <h1
            className={`${rubikMedium.className} text-[1.25rem]/[120%] mt-2 mb-6 lg:text-[1.5rem] xl:text-[2.5rem]`}
          >
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
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
              key={option.id}
              className="rounded-xl bg-(--white) border border-(--grey-50)"
            >
              <LinkButton className={`${rubikMedium.className} text-lg lg:text-[1.375rem]`}>
                <div
                  className={`flex justify-center items-center w-10 h-10 mr-4 rounded-md p-2 bg-(--grey-50) text-(--grey-500)`}
                >
                  {optionLetters[index]}
                </div>
                {option.label}
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
