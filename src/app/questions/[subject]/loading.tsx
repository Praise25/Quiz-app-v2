"use client";

import { useParams } from "next/navigation";
import { getSubjectData } from "@/utils/helper";

export default function Loading() {
  const { subject: subjectTitle } = useParams();

  // type narrowing to help resolve issue where typescript complains about the type of subjectTitle being ParamValue
  const resolvedTitle =
    typeof subjectTitle === "string" ? subjectTitle : undefined;
  const activeSubject = resolvedTitle
    ? getSubjectData(resolvedTitle)
    : undefined;

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div
        className={`loading loading-spinner ${activeSubject?.iconColor} w-1/10`}
      ></div>
    </div>
  );
}
