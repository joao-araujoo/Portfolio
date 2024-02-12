import AnchorLink from "../../Atoms/AnchorLink";
import styles from "./styles.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function FooterNavigation() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <AnchorLink path="https://github.com/joao-araujoo">
          <FaGithub color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink path="https://www.linkedin.com/in/joao-araujoo/">
          <FaLinkedin color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink path="https://api.whatsapp.com/send/?phone=5512997272631">
          <FaWhatsapp color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink path="https://www.instagram.com/joao.araujoo_/">
          <FaInstagram color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink path="https://open.spotify.com/user/uxb66upc7ekxdup54a4frat8e?si=992f8ee8344f4d95">
          <FaSpotify color="#c6c6c6" />
        </AnchorLink>
        <AnchorLink
          path="/Curriculo - João Pedro Araujo Costa.pdf"
          download="CV - João Pedro Araujo Costa"
        >
          <HiOutlineDocumentArrowDown color="#c6c6c6" />
        </AnchorLink>
      </div>
    </nav>
  );
}
