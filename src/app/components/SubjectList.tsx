"use client";

import LinkButton from "@/app/components/ui/LinkButton";

import { rubikMedium } from "@/fonts/rubikFonts";
import { motion } from "motion/react";
import { Subject, SUBJECTS } from "@/data/consts";
import { useAppContext } from "@/hooks/useAppContext";

export default function SubjectList() {
  const { selectSubject } = useAppContext();

  async function handleSelectSubject(subject: Subject) {
    await selectSubject(subject);
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
              className={`${rubikMedium.className} text-lg rounded-xl`} 
              onClick={() => handleSelectSubject(subject)}
              href="/questions"
            >
              <div
                className={`mr-4 rounded-md p-2 ${subject.iconBackgroundColor}`}
              >
                <Icon className={`${subject.iconColor}`} />
              </div>
              {subject.title}
            </LinkButton>
          </motion.li>
        );
      })}
    </ul>
  );
}
