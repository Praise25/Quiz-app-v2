"use server"

import { readFile, writeFile } from "fs/promises";
import { type Question } from "@/data/consts";

export async function addIdToQuestions() {
  const filePath = "src/data/data.json"
  const data = await readFile(filePath, "utf-8");
  const { quizzes } = JSON.parse(data);

  const updatedQuizzes = quizzes.map((quiz: { questions: Question[] }) => {
    const updatedQuestions = quiz.questions.map((question, index) => ({
      id: index + 1,
      ...question,
    }));

    return {
      ...quiz,
      questions: updatedQuestions,
    };
  });

  await writeFile(filePath, JSON.stringify({ quizzes: updatedQuizzes }));
}

export async function getSubject(subjectTitle: string) {
  const data = await readFile("src/data/data.json", "utf-8");
  const { quizzes } = JSON.parse(data);
  const subject = quizzes.find(
    (quiz: { title: string }) =>
      quiz.title.toLocaleLowerCase() === subjectTitle.toLocaleLowerCase(),
  );
  return subject;
}
