import PropTypes from "prop-types";
import styles from "./styles.module.css";

AnchorLink.propTypes = {
  children: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default function AnchorLink({ children, path, ...props }) {
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
