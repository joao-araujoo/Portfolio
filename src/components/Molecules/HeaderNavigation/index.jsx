import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function HeaderNavigation() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </nav>
  );
}
