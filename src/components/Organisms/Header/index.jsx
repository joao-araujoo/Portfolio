import Logo from "../../Atoms/Logo";
import HeaderNavigation from "../../Molecules/HeaderNavigation";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

Header.propTypes = {
  hoverEnter: PropTypes.func,
  cursorLeave: PropTypes.func,
};

export default function Header({ hoverEnter, cursorLeave }) {
  return (
    // TODO transformar em responsivo com menu hamburger
    <header className={styles.wrapper}>
      <Logo />
      <HeaderNavigation hoverEnter={hoverEnter} cursorLeave={cursorLeave} />
    </header>
  );
}
