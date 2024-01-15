import Logo from "../../Atoms/Logo";
import HeaderNavigation from "../../Molecules/HeaderNavigation";
import styles from "./styles.module.css";

export default function Header() {
  return (
    // TODO transformar em responsivo com menu hamburger
    <header className={styles.wrapper}>
      <Logo />
      <HeaderNavigation />
    </header>
  )
}