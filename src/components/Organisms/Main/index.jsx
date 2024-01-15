import PropTypes from "prop-types";
import styles from "./styles.module.css";

Main.propTypes = {
  children: PropTypes.any,
};

export default function Main({ children }) {
  return <main className={styles.wrapper}>{children}</main>;
}
