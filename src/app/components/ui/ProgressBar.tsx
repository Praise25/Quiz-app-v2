import { motion } from "motion/react";
import type { TargetAndTransition, VariantLabels } from "motion/react";

interface ProgressBarProps {
  outerDivStyle: string;
  innerDivStyle: string;
  initial: boolean | TargetAndTransition | VariantLabels | undefined;
  animate: boolean | TargetAndTransition | VariantLabels | undefined;
}

export default function ProgressBar({
  outerDivStyle,
  innerDivStyle,
  initial,
  animate,
}: ProgressBarProps) {
  return (
    <div className={outerDivStyle}>
      <motion.div
        className={innerDivStyle}
        initial={initial}
        animate={animate}
      ></motion.div>
    </div>
  );
}
