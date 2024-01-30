import Particle from "../components/Atoms/Particle/Particle";
import ProjectsContainer from "../components/Molecules/ProjectsContainer";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";

export default function Projects() {
  document.title = "Projects | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">Projects.</h1>
      <Header />
      <Main
        footerText="Are You Convinced To Contact Me Now ?"
        footerPath="/contact"
      >
        <h1 className="title">Projects.</h1>
        <ProjectsContainer />
      </Main>
    </>
  );
}
