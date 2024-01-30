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
  document.title = "About | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">About.</h1>
      <Header />
      <Main footerText="Lets Continue To Projects" footerPath="/projects">
        <h1 className="title">About Me.</h1>

        <h3 className="subtitle">
          What I Do?
          <TbCodeDots />
        </h3>
        <p className="paragraph" style={{ marginTop: "10px" }}>
          I&apos;m João, a 16-year-old front-end developer. I work with HTML,
          CSS, JavaScript (sometimes TypeScript), React, Node.js, and MongoDB.
          My thing is creating websites and apps that work well and look cool.
          When I&apos;m not in coding mode, I&apos;m watching movies, exploring
          new music styles, and cheering for Corinthians. I&apos;m just a
          regular guy, always open to collaborating on cool projects. Ready to
          build something together?
        </p>

        <h3 className="subtitle">
          Tech Stack.
          <FaCode />
        </h3>
        <TechnologiesContainer />

        <h3 className="subtitle">
          My Musics.
          <FaSpotify />
        </h3>
        <MusicsContainer />

        <h3 className="subtitle" style={{marginTop: "20px"}}>
          My Movies.
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
