import Link from "../../Atoms/Link";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

HeaderNavigation.propTypes = {
  hoverEnter: PropTypes.func,
  cursorLeave: PropTypes.func
}

export default function HeaderNavigation({ hoverEnter, cursorLeave }) {
  return (
    <nav>
      <div className={styles.wrapper}>
        <Link
          path="/about"
          onMouseEnter={hoverEnter}
          onMouseLeave={cursorLeave}
        >
          About
        </Link>
        <Link
          path="/projects"
          onMouseEnter={hoverEnter}
          onMouseLeave={cursorLeave}
        >
          Projects
        </Link>
        <Link
          path="/contact"
          onMouseEnter={hoverEnter}
          onMouseLeave={cursorLeave}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
