import HtmlIcon from "@/assets/html-icon.svg";
import CssIcon from "@/assets/css-icon.svg";
import JsIcon from "@/assets/js-icon.svg";
import AccessibilityIcon from "@/assets/accessibility-icon.svg";

export interface Subject {
  id: number;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  iconBackgroundColor: string;
  hexBackgroundColor: string;
  hexForegroundColor: string;
  buttonBackgroundColor: string;
}

export const SUBJECTS = [
  {
    id: 1,
    name: "HTML",
    icon: HtmlIcon,
    iconColor: "text-(--orange-400)",
    iconBackgroundColor: "bg-(--orange-50)",
    hexBackgroundColor: "#fff5ed",
    hexForegroundColor: "#ff7e35",
    buttonBackgroundColor: "bg-(--orange-400)"
  },
  {
    id: 2,
    name: "CSS",
    icon: CssIcon,
    iconColor: "text-(--green-500)",
    iconBackgroundColor: "bg-(--green-100)",
    hexBackgroundColor: "#e0fdef",
    hexForegroundColor: "#2fd887",
    buttonBackgroundColor: "bg-(--green-500)"
  },
  {
    id: 3,
    name: "Javascript",
    icon: JsIcon,
    iconColor: "text-(--blue-500)",
    iconBackgroundColor: "bg-(--blue-50)",
    hexBackgroundColor: "#ebf0ff",
    hexForegroundColor: "#306aff",
    buttonBackgroundColor: "bg-(--blue-500)"
  },
  {
    id: 4,
    name: "Accessibility",
    icon: AccessibilityIcon,
    iconColor: "text-(--purple-600)",
    iconBackgroundColor: "bg-(--purple-100)",
    hexBackgroundColor: "#f6e7ff",
    hexForegroundColor: "#a729f5",
    buttonBackgroundColor: "bg-(--purple-600)"
  },
];
