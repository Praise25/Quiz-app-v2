import Questions from "./components/Questions";

import { notFound } from "next/navigation";
import { getSubjectQuiz } from "@/utils/processData";
import { getSubjectData } from "@/utils/helper";

interface PageProps {
  params: Promise<{ subject: string }>;
}

export default async function Page({ params }: PageProps) {
  const { subject: subjectTitle } = await params;

  const subjectData = getSubjectData(subjectTitle);
  const subjectQuiz = await getSubjectQuiz(subjectTitle);

  if (subjectData) {
    const completeSubject = { ...subjectData, ...subjectQuiz };
    // remove icon property to stop the error thrown from passing a function in an object as a prop,
    // from a server component to a client component
    const { icon: _icon, ...completeSubjectWithoutIcon } = completeSubject;
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return <Questions activeSubject={completeSubjectWithoutIcon} />;
  } else {
    notFound();
  }
}
