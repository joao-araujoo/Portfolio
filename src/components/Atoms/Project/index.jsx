import AnchorLink from "../AnchorLink";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

Project.propTypes = {
  repositoryLink: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default function Project({ repositoryLink, media, name, description, children }) {
  return (
    <AnchorLink
        path={repositoryLink}
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src={media}
          alt={`${name} - João Araujo's Project`}
        />
        <span className={styles.contentTab}>
          <h2>{name}</h2>
          <p>
            {description}
          </p>
          <p>
            {children}
          </p>
        </span>
      </AnchorLink>
  );
}
