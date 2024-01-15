import Link from "../../Atoms/Link";
import styles from "./styles.module.css";

export default function HeaderNavigation() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <Link path="/about">About</Link>
        <Link path="/projects">Projects</Link>
        <Link path="/contact">Contact</Link>
      </div>
    </nav>
  );
}
