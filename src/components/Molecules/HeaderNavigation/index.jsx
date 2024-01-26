import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function HeaderNavigation() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
