"use client";

import Logo from "@/app/components/Logo";
import AccessibilityIcon from "@/assets/accessibility-icon.svg";

// import { useAppContext } from "@/hooks/useAppContext";
import { rubikMedium } from "@/fonts/rubikFonts";

const activeSubject = {
  id: 1,
  title: "Accessibility",
  icon: AccessibilityIcon,
  iconColor: "text-(--purple-600)",
  iconBackgroundColor: "bg-(--purple-100)",
  hexBackgroundColor: "#f6e7ff",
  hexForegroundColor: "#a729f5",
  buttonBackgroundColor: "bg-(--purple-600)",
  hoverBackgroundColor: "bg-(--purple-750)",
  hoverBorderColor: "border-(--purple-600)",
};

export default function ScoreDisplay() {
  // const { activeSubject } = useAppContext();

  return (
    <div className="flex flex-col bg-(--white) p-8 rounded-xl mt-10 gap-4">
      <div className="flex justify-center gap-4">
        <Logo
          subject={activeSubject}
          Icon={activeSubject.icon || AccessibilityIcon}
          iconContainerStyles={`flex justify-center items-center p-2 ${activeSubject.iconBackgroundColor} rounded-sm`}
          iconStyles={`${activeSubject.iconColor}`}
          logoTextStyles={`${rubikMedium.className} text-(--blue-900) text-2xl text-center self-center`}
        />
      </div>
      <p
        className={`${rubikMedium.className} text-center text-[5.5rem]/[100%]`}
      >
        8
      </p>
      <p
        className={`${rubikMedium.className} text-center text-lg/[100%] text-(--grey-500)`}
      >
        out of 10
      </p>
    </div>
  );
}
