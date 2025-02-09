import Particle from "../components/Atoms/Particle/Particle";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import { TbCodeDots } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import TechnologiesContainer from "../components/Molecules/TechnologiesContainer";
// import CorinthiansNews from "../components/Atoms/CorinthiansNews";

export default function About() {
  document.title = "Sobre | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">Sobre.</h1>
      <Header />
      <Main footerText="Continuar Para Os Projetos" footerPath="/projects">
        <h1 className="title">Sobre mim.</h1>

        <h3 className="subtitle">
          O que eu faço?
          <TbCodeDots />
        </h3>
        <p className="paragraph" style={{ marginTop: "10px" }}>
          Trabalho com HTML, CSS, SASS, JavaScript, TypeScript, React, Node.js e MongoDB. Meu foco é criar aplicações web
          que resolvam problemas e tenham uma interface incrível. Quando não
          estou codando, estou assistindo filmes, explorando novos estilos
          musicais e torcendo pro Timão 🖤🤍🦅. Pronto para construirmos algo
          juntos?
        </p>

        <h3 className="subtitle">
          Tecnologias.
          <FaCode />
        </h3>
        <TechnologiesContainer style={{marginBottom: "50px"}} />
      </Main>
    </>
  );
}
