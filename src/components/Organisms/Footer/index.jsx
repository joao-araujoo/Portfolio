import PropTypes from "prop-types";
import FooterLink from "../../Molecules/FooterLink";
import FooterNavigation from "../../Molecules/FooterNavigation";
import styles from "./styles.module.css";

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default function Footer({ text, path }) {
  return (
    <footer className={styles.wrapper}>
      <FooterLink text={text} path={path} />
      <FooterNavigation />
    </footer>
  );
}
