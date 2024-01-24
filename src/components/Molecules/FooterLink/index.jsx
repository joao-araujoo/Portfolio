import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

FooterLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function FooterLink({ path, text }) {
  return (
    <Link to={path} className={styles.wrapper}>
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="#c6c6c6"
          d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z"
        />
      </svg>
    </Link>
  );
}
