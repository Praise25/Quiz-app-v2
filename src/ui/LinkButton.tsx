import Link from "next/link";

interface LinkButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function LinkButton({
  children,
  href = "",
  onClick,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} flex items-center p-4 h-18 rounded-xl shadow-[0_16px_40px_rgb(143,160,193,14%)]`}
    >
      {children}
    </Link>
  );
}
