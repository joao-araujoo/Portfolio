import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Footer from "../Footer";

Main.propTypes = {
  children: PropTypes.any,
  footerText: PropTypes.string,
  footerPath: PropTypes.string,
};

export default function Main({ children, footerText, footerPath, ...props }) {
  return (
    <main className={styles.wrapper} {...props}>
      {children}
      <Footer text={footerText} path={footerPath} />
    </main>
  );
}
