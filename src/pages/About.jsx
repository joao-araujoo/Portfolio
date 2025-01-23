import Particle from "../components/Atoms/Particle/Particle";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import MusicsContainer from "../components/Molecules/MusicsContainer";
import MoviesContainer from "../components/Molecules/MoviesContainer";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbCodeDots } from "react-icons/tb";
import { FaSpotify, FaCode } from "react-icons/fa";
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
        <TechnologiesContainer />

        <h3 className="subtitle">
          Minhas músicas.
          <FaSpotify />
        </h3>
        <MusicsContainer />

        <h3 className="subtitle" style={{ marginTop: "30px" }}>
          Meus filmes.
          <BiSolidCameraMovie />
        </h3>
        <MoviesContainer />

        {/* TODO arrumar/remover/procurar outra alternativa para esta seção */}
        {/* <h3 className="subtitle">
          Corinthians Now.
          <img src="/corinthians.svg" alt="" style={{width: "25px" }} />
        </h3>
        <CorinthiansNews /> */}
      </Main>
    </>
  );
}
