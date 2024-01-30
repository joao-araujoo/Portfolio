import Project from "../../Atoms/Project";
import styles from "./styles.module.css";

export default function ProjectsContainer() {
  return (
    <div className={styles.wrapper}>
      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/%C3%89l%C3%A9gantCart"
        // TODO gravar gif do projeto
        media="https://github.com/joao-araujoo/Projects/assets/113838517/66978d07-da34-4fc9-8b91-b506331233d4"
        name="ÉlégantCart"
        description="ÉlégantCart is more than just a shopping application; it's an
        elegant and modern experience that transforms the act of online
        shopping into something unique. With thoughtfully crafted design,
        intuitive features, and a user-friendly interface, ÉlégantCart
        redefines how we explore and acquire products."
      >
        <span>React.js</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </Project>

      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/Todo%20List"
        media="https://github.com/joao-araujoo/Projects/assets/113838517/38dcc4bb-558a-4ca3-b8b7-d61f070e22db"
        name="Pretty Todo List"
        description="Pretty Todo List is a modern to-do list with lot of functions."
      >
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>Javascript</span>
      </Project>

      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/Advice%20generator"
        media="https://github.com/joao-araujoo/Projects/assets/113838517/166f4ed3-2d38-4252-8a8f-4e849d2378c6"
        name="Pretty Advice"
        description="Advice generator with consumption of an API, in addition to having a
        beautiful interactive card and design"
      >
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
      </Project>

      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/Weather%20App"
        media="https://github.com/joao-araujoo/Projects/assets/113838517/5372d55b-c452-4408-bd70-ca25c08ff274"
        name="Pretty Daily Weather"
        description="Weather website with consumption of API's"
      >
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
      </Project>

      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/Posts%20page"
        media="https://user-images.githubusercontent.com/113838517/219951635-db56e9a3-f575-4598-b7ed-3d7445558d54.gif"
        name="Post Page"
        description="Interactive platform for sharing posts with a social media-like
        experience and a range of functionalities"
      >
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>Javascript</span>
      </Project>

      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/AMD%20copy"
        media="https://user-images.githubusercontent.com/113838517/219908491-4204818e-df4a-456e-a22f-2b1e761f2f8e.gif"
        name="AMD Copy"
        description="Detailed copy of AMD website and fully responsive"
      >
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>Javascript</span>
      </Project>

      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/Notes"
        media="https://user-images.githubusercontent.com/113838517/221418393-c97917a9-9886-4406-8106-6a82e7cbeced.gif"
        name="Notes"
        description="Project focused on the design and use of the modal"
      >
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>Javascript</span>
      </Project>

      <Project
        repositoryLink="https://github.com/joao-araujoo/Projects/tree/main/Breaking%20Bad"
        media="https://github.com/joao-araujoo/Projects/assets/113838517/7a24278e-15dc-4ac8-82a7-f163d5fae261"
        name="Breaking Bad"
        description="Website inspired by the breaking bad logo, which locates chemical
        elements in the titles"
      >
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
      </Project>
    </div>
  );
}
