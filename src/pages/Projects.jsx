import Particle from "../components/Atoms/Particle/Particle";
import ProjectsContainer from "../components/Molecules/ProjectsContainer";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";

export default function Projects() {
  document.title = "Projetos | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">Projetos.</h1>
      <Header />
      <Main
        footerText="Preparado Para Desenvolvermos Algo Juntos?"
        footerPath="/contact"
      >
        <h1 className="title">Projetos.</h1>
        <ProjectsContainer />
      </Main>
    </>
  );
}
