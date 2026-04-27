"use client";

import Logo from "@/app/components/Logo";
import AccessibilityIcon from "@/assets/accessibility-icon.svg";
import GenericButton from "@/app/components/ui/GenericButton";

import { useAppContext } from "@/hooks/useAppContext";
import { rubikMedium } from "@/fonts/rubikFonts";
import { useRouter } from "next/navigation";

export default function ScoreDisplay() {
  const { activeSubject, answers } = useAppContext();
  const router = useRouter();

  let score = 0;

  function calculateScore() {
    answers.forEach((answer) => {
      if (answer.isCorrect) {
        score++;
      }
    });
  }

  function returnToHome() {
    router.push("/");
  }

  calculateScore();
  console.log(answers);

  return (
    <>
      <div className="flex flex-col bg-(--white) p-8 rounded-xl mt-10 gap-4">
        <div className="flex justify-center gap-4">
          <Logo
            subject={activeSubject}
            Icon={activeSubject.icon || AccessibilityIcon}
            iconContainerStyles={`flex justify-center items-center p-2 ${activeSubject.iconBackgroundColor} rounded-sm`}
            iconStyles={`${activeSubject.iconColor}`}
            logoTextStyles={`${rubikMedium.className} text-(--blue-900) text-2xl text-center self-center md:text-[2rem]/[100%]`}
          />
        </div>
        <p
          className={`${rubikMedium.className} text-center text-[5.5rem]/[100%] md:text-[8rem]/[100%]`}
        >
          {score}
        </p>
        <p
          className={`${rubikMedium.className} text-center text-lg/[100%] text-(--grey-500) md:text-xl/[100%]`}
        >
          out of {activeSubject.questions?.length}
        </p>
      </div>
      <GenericButton
        className={`${rubikMedium.className} text-lg/[100%] text-(--white) flex justify-center items-center w-full h-14 p-4 my-4 rounded-xl ${activeSubject.primaryBackgroundColor || "bg-(--purple-600)"} shadow-[0 16px 40px rgb(143 160 193 / 14%)] transition sm:my-8 md:text-xl/[100%]`}
        type="button"
        whileHover={{ backgroundColor: activeSubject.hexHoverColor }}
        // add whileTap to other buttons on questions page
        whileTap={{ backgroundColor: activeSubject.hexHoverColor }}
        onClick={returnToHome}
      >
        Play Again
      </GenericButton>
    </>
  );
}
