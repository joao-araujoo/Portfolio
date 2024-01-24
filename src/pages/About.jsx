import { useState } from "react";
import Cursor from "../components/Atoms/Cursor";
import Particle from "../components/Atoms/Particle/Particle";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import MusicsContainer from "../components/Molecules/MusicsContainer";

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
        <h1 className="title">About.</h1>
        <MusicsContainer />
      </Main>
    </>
  );
}
