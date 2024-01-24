import { Link } from "react-router-dom";
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
          to="/about"
          onMouseEnter={hoverEnter}
          onMouseLeave={cursorLeave}
        >
          About
        </Link>
        <Link
          to="/projects"
          onMouseEnter={hoverEnter}
          onMouseLeave={cursorLeave}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onMouseEnter={hoverEnter}
          onMouseLeave={cursorLeave}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
