import { SUBJECTS } from "@/data/consts";

export function getSubjectData(subjectTitle: string) {
  const subjectData = SUBJECTS.find((subject) => subject.title === subjectTitle)
  return subjectData;
}