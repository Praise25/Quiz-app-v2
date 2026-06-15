"use client";

import LinkButton from "@/app/components/ui/LinkButton";

import { rubikMedium } from "@/fonts/rubikFonts";
import { motion } from "motion/react";
import { SUBJECTS } from "@/data/consts";

export default function SubjectList() {
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
              href={`/questions/${subject.title}`}
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
