import Questions from "./components/Questions";

import { SUBJECTS } from "@/data/consts";
import { notFound } from "next/navigation";
import { getSubjectQuiz } from "@/utils/processData";

interface PageProps {
  params: Promise<{ subject: string }>;
}

export default async function Page({ params }: PageProps) {
  const { subject: subjectTitle } = await params;
  console.log("Subject Title: ", subjectTitle);

  const partialSubject = SUBJECTS.find((subject) => {
    console.log("Current Subject: ", subject);
    return subject.title === subjectTitle;
  });
  console.log("Found Subject: ", partialSubject);

  const subjectQuiz = await getSubjectQuiz(subjectTitle);

  if (partialSubject) {
    const completeSubject = { ...partialSubject, ...subjectQuiz };
    // remove icon property to stop the error thrown from passing a function in an object as a prop 
    // from a server component to a client component
    const { icon: _icon, ...completeSubjectWithoutIcon } = completeSubject;

    return <Questions activeSubject={completeSubjectWithoutIcon} />;
  } else {
    notFound();
  }
}
