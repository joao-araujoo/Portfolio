import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import styles from "./styles.module.css";

export default function TechnologiesContainer() {
  return (
    <div className={styles.wrapper} style={{ paddingTop: "30px" }}>
      <div className={styles.tooltip}>
        <FaHtml5 size="100" />
        <span className={styles.tooltipText}>HTML</span>
      </div>
      <div className={styles.tooltip}>
        <FaCss3Alt size="100" />
        <span className={styles.tooltipText}>CSS</span>
      </div>
      <div className={styles.tooltip}>
        <FaSass size="100" />

        <span className={styles.tooltipText}>SASS</span>
      </div>
      <div className={styles.tooltip}>
        <IoLogoJavascript size="100" />

        <span className={styles.tooltipText}>Javascript</span>
      </div>
      <div className={styles.tooltip}>
        <FaGitAlt size="100" />

        <span className={styles.tooltipText}>Git</span>
      </div>
      <div className={styles.tooltip}>
        <FaReact size="100" />

        <span className={styles.tooltipText}>React.js</span>
      </div>
      <div className={styles.tooltip}>
        <FaNodeJs size="100" />

        <span className={styles.tooltipText}>Node.js</span>
      </div>
      <div className={styles.tooltip}>
        <SiMongodb size="100" />

        <span className={styles.tooltipText}>MongoDB</span>
      </div>
    </div>
  );
}
