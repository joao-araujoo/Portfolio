import Link from "../../Atoms/Link";
import styles from "./styles.module.css";

export default function HeaderNavigation() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <Link path="#">About</Link>
        <Link path="#">Projects</Link>
        <Link path="#">Contact</Link>
      </div>
    </nav>
  );
}
