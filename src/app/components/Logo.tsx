import { type Subject } from "@/data/consts";

interface LogoProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconStyles: string;
  iconContainerStyles: string;
  logoTextStyles: string;
  subject: Subject;
}

export default function Logo({
  iconContainerStyles,
  iconStyles,
  logoTextStyles,
  subject,
  Icon,
}: LogoProps) {
  return (
    <>
      <div className={iconContainerStyles}>
        <Icon className={iconStyles} />
      </div>
      <p className={logoTextStyles}>{subject.title}</p>
    </>
  );
}
