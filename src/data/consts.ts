import HtmlIcon from "@/assets/html-icon.svg";
import CssIcon from "@/assets/css-icon.svg";
import JsIcon from "@/assets/js-icon.svg";
import AccessibilityIcon from "@/assets/accessibility-icon.svg";

export const SUBJECTS = [
  {
    id: 1,
    name: "HTML",
    icon: HtmlIcon,
    iconColor: "text-(--orange-400)",
    iconBackgroundColor: "bg-(--orange-50)",
    hexBackgroundColor: "#fff5ed",
    hexForegroundColor: "#ff7e35"
  },
  {
    id: 2,
    name: "CSS",
    icon: CssIcon,
    iconColor: "text-(--green-500)",
    iconBackgroundColor: "bg-(--green-100)",
    hexBackgroundColor: "#e0fdef",
    hexForegroundColor: "#2fd887"
  },
  {
    id: 3,
    name: "Javascript",
    icon: JsIcon,
    iconColor: "text-(--blue-500)",
    iconBackgroundColor: "bg-(--blue-50)",
    hexBackgroundColor: "#ebf0ff",
    hexForegroundColor: "#306aff"
  },
  {
    id: 4,
    name: "Accessibility",
    icon: AccessibilityIcon,
    iconColor: "text-(--purple-600)",
    iconBackgroundColor: "bg-(--purple-100)",
    hexBackgroundColor: "#f6e7ff",
    hexForegroundColor: "#a729f5"
  },
];
