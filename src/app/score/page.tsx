import ScoreDisplay from "./components/ScoreDisplay";

import { rubikLight, rubikMedium } from "@/fonts/rubikFonts";

export default function ScorePage() {
  return (
    <main className="relative z-100">
      <h1 className={`${rubikLight.className} text-[2.5rem]/[100%] mt-8`}>
        Quiz completed{" "}
        <span className={`${rubikMedium.className} block`}>You scored...</span>
      </h1>
      <ScoreDisplay />
    </main>
  );
}
