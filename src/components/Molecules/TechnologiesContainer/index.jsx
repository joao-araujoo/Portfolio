import { IoLogoJavascript } from "react-icons/io5";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import styles from "./styles.module.css";
import Technology from "../../Atoms/Technology";

const technologiesData = [
  { id: 1, name: "HTML", icon: <FaHtml5 size="100" /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt size="100" /> },
  { id: 3, name: "Sass", icon: <FaSass size="100" /> },
  { id: 4, name: "Javascript", icon: <IoLogoJavascript size="100" /> },
  { id: 5, name: "Git", icon: <FaGitAlt size="100" /> },
  { id: 6, name: "React.js", icon: <FaReact size="100" /> },
  { id: 7, name: "Node.js", icon: <FaNodeJs size="100" /> },
  { id: 8, name: "MongoDB", icon: <SiMongodb size="100" /> },
];

// eslint-disable-next-line react/prop-types
export default function TechnologiesContainer({ style }) {
  return (
    <div className={styles.wrapper} style={{ padding: "10px", ...style }}>
      {technologiesData.map((technology) => (
        <Technology key={technology.id} name={technology.name}>
          {technology.icon}
        </Technology>
      ))}
    </div>
  );
}
