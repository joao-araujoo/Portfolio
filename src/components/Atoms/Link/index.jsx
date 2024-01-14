import PropTypes from "prop-types";
import styles from "./styles.module.css";

Link.propTypes = {
  children: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default function Link({ children, path, ...props }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={path}
      className={styles.wrapper}
      {...props}
    >
      {children}
    </a>
  );
}
