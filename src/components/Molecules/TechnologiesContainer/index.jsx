import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import styles from "./styles.module.css";
import Technology from "../../Atoms/Technology";

export default function TechnologiesContainer() {
  return (
    <div className={styles.wrapper} style={{ paddingTop: "30px" }}>
      <Technology name="HTML">
        <FaHtml5 size="100" />
      </Technology>

      <Technology name="CSS">
        <FaCss3Alt size="100" />
      </Technology>

      <Technology name="Sass">
        <FaSass size="100" />
      </Technology>

      <Technology name="Javascript">
        <IoLogoJavascript size="100" />
      </Technology>

      <Technology name="Git">
        <FaGitAlt size="100" />
      </Technology>

      <Technology name="React.js">
        <FaReact size="100" />
      </Technology>

      <Technology name="Node.js">
        <FaNodeJs size="100" />
      </Technology>

      <Technology name="MongoDB">
        <SiMongodb size="100" />
      </Technology>
    </div>
  );
}
