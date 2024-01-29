import AnchorLink from "../AnchorLink";
import styles from "./styles.module.css";

export default function ProjectBox() {
  return (
    // TODO componentizar
    <div className={styles.wrapper}>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/%C3%89l%C3%A9gantCart"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://github.com/joao-araujoo/Projects/assets/113838517/66978d07-da34-4fc9-8b91-b506331233d4"
          alt="ÉlégantCart - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>ÉlégantCart</h2>
          <p>
            ÉlégantCart is more than just a shopping application; it&apos;s an
            elegant and modern experience that transforms the act of online
            shopping into something unique. With thoughtfully crafted design,
            intuitive features, and a user-friendly interface, ÉlégantCart
            redefines how we explore and acquire products.
          </p>
          <p>
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </p>
        </span>
      </AnchorLink>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/Todo%20List"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://github.com/joao-araujoo/Projects/assets/113838517/38dcc4bb-558a-4ca3-b8b7-d61f070e22db"
          alt="Pretty Todo List - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>Pretty Todo List</h2>
          <p>Pretty Todo List is a modern to-do list with lot of functions.</p>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>Javascript</span>
          </p>
        </span>
      </AnchorLink>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/Advice%20generator"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://github.com/joao-araujoo/Projects/assets/113838517/166f4ed3-2d38-4252-8a8f-4e849d2378c6"
          alt="Pretty Advice - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>Pretty Advice</h2>
          <p>
            Advice generator with consumption of an API, in addition to having a
            beautiful interactive card and design
          </p>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
          </p>
        </span>
      </AnchorLink>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/Weather%20App"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://github.com/joao-araujoo/Projects/assets/113838517/5372d55b-c452-4408-bd70-ca25c08ff274"
          alt="Pretty Daily Weather - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>Pretty Daily Weather</h2>
          <p>Weather website with consumption of API&apos;s</p>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
          </p>
        </span>
      </AnchorLink>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/Posts%20page"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://user-images.githubusercontent.com/113838517/219951635-db56e9a3-f575-4598-b7ed-3d7445558d54.gif"
          alt="Posts Page - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>Post Page</h2>
          <p>
            Interactive platform for sharing posts with a social media-like
            experience and a range of functionalities
          </p>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>Javascript</span>
          </p>
        </span>
      </AnchorLink>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/AMD%20copy"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://user-images.githubusercontent.com/113838517/219908491-4204818e-df4a-456e-a22f-2b1e761f2f8e.gif"
          alt="AMD Copy - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>AMD Copy</h2>
          <p>Detailed copy of AMD website and fully responsive</p>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>Javascript</span>
          </p>
        </span>
      </AnchorLink>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/Notes"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://user-images.githubusercontent.com/113838517/221418393-c97917a9-9886-4406-8106-6a82e7cbeced.gif"
          alt="Notes - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>Notes</h2>
          <p>Project focused on the design and use of the modal</p>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>Javascript</span>
          </p>
        </span>
      </AnchorLink>
      <AnchorLink
        path="https://github.com/joao-araujoo/Projects/tree/main/Breaking%20Bad"
        className={styles.projectBox}
      >
        <img
          loading="lazy"
          src="https://github.com/joao-araujoo/Projects/assets/113838517/7a24278e-15dc-4ac8-82a7-f163d5fae261"
          alt="Breaking Bad - João Araujo's Project"
        />
        <span className={styles.contentTab}>
          <h2>Breaking Bad</h2>
          <p>
            Website inspired by the breaking bad logo, which locates chemical
            elements in the titles
          </p>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
          </p>
        </span>
      </AnchorLink>
    </div>
  );
}
