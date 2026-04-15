import HtmlIcon from "@/assets/html-icon.svg";
import CssIcon from "@/assets/css-icon.svg";
import JsIcon from "@/assets/js-icon.svg";
import AccessibilityIcon from "@/assets/accessibility-icon.svg";

export interface Question {
  id?: number;
  question: string;
  options: string[];
  answer: string;
}
export interface Subject {
  id: number;
  title: string;
  questions?: Question[];
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  iconBackgroundColor: string;
  hexBackgroundColor: string;
  hexForegroundColor: string;
  buttonBackgroundColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor: string;
}

export const SUBJECTS = [
  {
    id: 1,
    title: "HTML",
    icon: HtmlIcon,
    iconColor: "text-(--orange-400)",
    iconBackgroundColor: "bg-(--orange-50)",
    hexBackgroundColor: "#fff5ed",
    hexForegroundColor: "#ff7e35",
    buttonBackgroundColor: "bg-(--orange-400)",
    hoverBackgroundColor: "bg-(--orange-550)",
    hoverBorderColor: "border-(--orange-400)"
  },
  {
    id: 2,
    title: "CSS",
    icon: CssIcon,
    iconColor: "text-(--green-500)",
    iconBackgroundColor: "bg-(--green-100)",
    hexBackgroundColor: "#e0fdef",
    hexForegroundColor: "#2fd887",
    buttonBackgroundColor: "bg-(--green-500)",
    hoverBackgroundColor: "bg-(--green-650)",
    hoverBorderColor: "border-(--green-500)",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: JsIcon,
    iconColor: "text-(--blue-500)",
    iconBackgroundColor: "bg-(--blue-50)",
    hexBackgroundColor: "#ebf0ff",
    hexForegroundColor: "#306aff",
    buttonBackgroundColor: "bg-(--blue-500)",
    hoverBackgroundColor: "bg-(--blue-650)",
    hoverBorderColor: "border-(--blue-500)",
  },
  {
    id: 4,
    title: "Accessibility",
    icon: AccessibilityIcon,
    iconColor: "text-(--purple-600)",
    iconBackgroundColor: "bg-(--purple-100)",
    hexBackgroundColor: "#f6e7ff",
    hexForegroundColor: "#a729f5",
    buttonBackgroundColor: "bg-(--purple-600)",
    hoverBackgroundColor: "bg-(--purple-750)",
    hoverBorderColor: "border-(--purple-600)",
  },
];
