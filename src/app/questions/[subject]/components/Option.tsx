"use client";

import LinkButton from "@/app/components/ui/LinkButton";
import clsx from "clsx";
import CheckmarkIcon from "@/assets/checkmark.svg";
import DismissIcon from "@/assets/dismiss.svg";

import { useState } from "react";
import { motion } from "motion/react";
import { rubikMedium } from "@/fonts/rubikFonts";
import { type Subject } from "@/data/consts";

interface OptionProps {
  option: string;
  selectedOption: string;
  letter: string;
  subject: Subject | null;
  correctAnswer: string;
  hasSubmitted: boolean;
  onClick: () => void;
}

export default function Option({
  option,
  selectedOption,
  letter,
  subject,
  correctAnswer,
  hasSubmitted,
  onClick,
}: OptionProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredOption, setHoveredOption] = useState("");

  function handleHoverStart(option: string) {
    if (!hasSubmitted) {
      setHoveredOption(option);
      setIsHovering(true);
    }
  }

  function handleHoverEnd() {
    if (!hasSubmitted) {
      setIsHovering(false);
    }
  }

  return (
    <motion.li
      className={clsx(
        `rounded-3xl bg-(--white) border-3 transition`,
        isHovering && hoveredOption === option
          ? `${subject?.hoverBorderColor}`
          : selectedOption === option
            ? `${subject?.hoverBorderColor}`
            : "border-(--grey-50)",
      )}
      onHoverStart={() => handleHoverStart(option)}
      onHoverEnd={() => handleHoverEnd()}
    >
      <LinkButton
        className={clsx(
          `${rubikMedium.className} text-lg justify-between lg:text-[1.375rem] rounded-3xl`,
          hasSubmitted && "cursor-not-allowed",
        )}
        onClick={() => onClick()}
      >
        <div className="flex">
          <motion.div
            className={clsx(
              `flex justify-center items-center w-10 h-10 mr-4 rounded-md p-2 transition`,
              isHovering && hoveredOption === option
                ? `${subject?.primaryBackgroundColor} text-(--white)`
                : selectedOption === option
                  ? `${subject?.primaryBackgroundColor} text-(--white)`
                  : "bg-(--grey-50) text-(--grey-500)",
            )}
          >
            {letter}
          </motion.div>
          {option}
        </div>
        <div className="justify-self-end">
          <CheckmarkIcon
            className={clsx(
              "text-(--green-500)",
              hasSubmitted && option === correctAnswer ? "block" : "hidden",
            )}
          />
          <DismissIcon
            className={clsx(
              "text-(--red-500)",
              hasSubmitted && selectedOption === option
                ? selectedOption !== correctAnswer
                  ? "block"
                  : "hidden"
                : "hidden",
            )}
            width={40}
            height={40}
          />
        </div>
      </LinkButton>
    </motion.li>
  );
}
