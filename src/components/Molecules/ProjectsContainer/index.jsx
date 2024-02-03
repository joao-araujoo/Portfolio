import Project from "../../Atoms/Project";
import styles from "./styles.module.css";
import projectsData from "../../../data/projects.json";

export default function ProjectsContainer() {
  return (
    <div className={styles.wrapper}>
      {projectsData.map((project) => (
        <Project
          key={project.id}
          repositoryLink={project.repositoryLink}
          media={project.media}
          name={project.name}
          description={project.description}
        >
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </Project>
      ))}
    </div>
  );
}
