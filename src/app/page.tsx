import LinkButton from "@/ui/LinkButton";
import { Rubik } from "next/font/google";
import { SUBJECTS } from "@/data/consts";

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
    <main className="mt-8 relative z-100">
      <header>
        <h1 className={`${rubikLight.className} text-[2.5rem]/[100%]`}>
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
      </header>
      <ul className="mt-10 flex flex-col gap-4">
        {SUBJECTS.map((subject) => {
          const Icon = subject.icon;
          return (
            <LinkButton
              key={subject.id}
              className={`${rubikMedium.className} text-lg`}
            >
              <div
                className={`mr-4 rounded-md p-2 ${subject.iconBackgroundColor}`}
              >
                <Icon className={`${subject.iconColor}`} />
              </div>
              {subject.name}
            </LinkButton>
          );
        })}
      </ul>
    </main>
  );
}
