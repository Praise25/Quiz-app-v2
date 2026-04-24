import { motion, type HTMLMotionProps } from "motion/react";

interface GenericButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className: string;
}

export default function GenericButton({
  children,
  className,
  ...props
}: GenericButtonProps) {
  return (
    <motion.button
      className={`${className} text-lg/[100%] text-(--white) flex justify-center items-center w-full h-14 p-4 my-4 rounded-xl shadow-[0 16px 40px rgb(143 160 193 / 14%)] transition sm:my-8`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
