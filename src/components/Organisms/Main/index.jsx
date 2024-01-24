import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Footer from "../Footer";

Main.propTypes = {
  children: PropTypes.any,
  footerText: PropTypes.string,
  footerPath: PropTypes.string,
};

export default function Main({ children, footerText, footerPath }) {
  return (
    <main className={styles.wrapper}>
      {children}
      <Footer text={footerText} path={footerPath} />
    </main>
  );
}
