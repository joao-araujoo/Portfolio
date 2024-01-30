import styles from "./styles.module.css";
import PropTypes from "prop-types";

Technology.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default function Technology({ name, children }) {
  return (
    <div className={styles.tooltip}>
        {children}
        <span className={styles.tooltipText}>{name}</span>
      </div>
  )
}
