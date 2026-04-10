"use client";

import LinkButton from "@/ui/LinkButton";

import { Rubik } from "next/font/google";
import { motion } from "motion/react";
import { Subject, SUBJECTS } from "@/data/consts";
import { useContext } from "react";
import { AppContext } from "@/context/AppContextProvider";

const rubikMedium = Rubik({
  weight: "500",
});

export default function SubjectList() {
  const { selectSubject } = useContext(AppContext);

  function handleSelectSubject(subject: Subject) {
    selectSubject(subject);
  }

  return (
    <ul className="mt-10 flex flex-col gap-4 lg:flex-1 lg:mt-0">
      {SUBJECTS.map((subject) => {
        const Icon = subject.icon;
        return (
          <motion.li
            key={subject.id}
            whileHover={{
              backgroundColor: subject.hexBackgroundColor,
              borderColor: subject.hexForegroundColor,
            }}
            className="rounded-xl bg-(--white) border border-(--grey-50)"
          >
            <LinkButton
              className={`${rubikMedium.className} text-lg`}
              onClick={() => handleSelectSubject(subject)}
              href="/questions"
            >
              <div
                className={`mr-4 rounded-md p-2 ${subject.iconBackgroundColor}`}
              >
                <Icon className={`${subject.iconColor}`} />
              </div>
              {subject.name}
            </LinkButton>
          </motion.li>
        );
      })}
    </ul>
  );
}
