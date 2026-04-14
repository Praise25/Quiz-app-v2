"use client";

import LinkButton from "@/ui/LinkButton";
import clsx from "clsx";

import { useState } from "react";
import { motion } from "motion/react";
import { rubikMedium } from "@/fonts/rubikFonts";
import { type Subject } from "@/data/consts";

interface OptionProps {
  option: string;
  selectedOption: string;
  letter: string;
  subject: Subject | null;
  onClick: () => void;
}

export default function Option({
  option,
  selectedOption,
  letter,
  subject,
  onClick,
}: OptionProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredOption, setHoveredOption] = useState("");

  function handleHoverStart(option: string) {
    setHoveredOption(option);
    setIsHovering(true);
  }

  function handleHoverEnd() {
    setIsHovering(false);
  }

  return (
    <motion.li
      className={clsx(
        `rounded-3xl bg-(--white) border-3`,
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
        className={`${rubikMedium.className} text-lg lg:text-[1.375rem] rounded-3xl`}
        onClick={() => onClick()}
      >
        <motion.div
          className={clsx(
            `flex justify-center items-center w-10 h-10 mr-4 rounded-md p-2`,
            isHovering && hoveredOption === option
              ? `${subject?.buttonBackgroundColor} text-(--white)`
              : selectedOption === option
                ? `${subject?.buttonBackgroundColor} text-(--white)`
                : "bg-(--grey-50) text-(--grey-500)",
          )}
        >
          {letter}
        </motion.div>
        {option}
      </LinkButton>
    </motion.li>
  );
}
