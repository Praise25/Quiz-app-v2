import { Rubik } from "next/font/google";

const rubikLight = Rubik({
  weight: "300",
});

const rubikMedium = Rubik({
  weight: "500",
});

const rubikItalic = Rubik({
  weight: "400",
  style: "italic",
});

export default function Home() {
  return (
    <main className="mt-8">
      <h1
        className={`${rubikLight.className} text-[2.5rem]/[100%]`}
      >
        Welcome to the{" "}
        <span
          className={`${rubikMedium.className} block text-[2.5rem]/[100%] my-2`}
        >
          Frontend Quiz!
        </span>
      </h1>
      <p
        className={`${rubikItalic.className} text-sm/[150%] text-(--grey-500) mt-4`}
      >
        Pick a subject to get started.
      </p>
    </main>
  );
}
