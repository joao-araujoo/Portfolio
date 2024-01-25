import { useState } from "react";
import Cursor from "../components/Atoms/Cursor";
import Particle from "../components/Atoms/Particle/Particle";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import MusicsContainer from "../components/Molecules/MusicsContainer";
import MoviesContainer from "../components/Molecules/MoviesContainer";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbCodeDots } from "react-icons/tb";
import { FaSpotify, FaCode } from "react-icons/fa";
import TechnologiesContainer from "../components/Molecules/TechnologiesContainer";

export default function About() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const hoverEnter = () => setCursorVariant("hover");
  const cursorLeave = () => setCursorVariant("default");

  document.title = "About | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">About.</h1>
      <Cursor cursorVariant={cursorVariant} />
      <Header hoverEnter={hoverEnter} cursorLeave={cursorLeave} />
      <Main footerText="Lets Continue To Projects" footerPath="/projects">
        <h1 className="title">About Me.</h1>

        <h3 className="subtitle">
          What I Do?
          <TbCodeDots />
        </h3>
        <p className="paragraph" style={{ marginTop: "10px" }}>
          I&apos;m João, a 16-year-old front-end developer. I work with HTML, CSS,
          JavaScript (sometimes TypeScript), React, Node.js, and MongoDB. My thing is
          creating websites and apps that work well and look cool. When I&apos;m not
          in coding mode, I&apos;m watching movies, exploring new music styles, and
          cheering for Corinthians. I&apos;m just a regular guy, always open to
          collaborating on cool projects. Ready to build something together?
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

        <h3 className="subtitle">
          My Movies.
          <BiSolidCameraMovie />
        </h3>
        <MoviesContainer />
      </Main>
    </>
  );
}
