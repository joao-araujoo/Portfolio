import { useState } from "react";
import Cursor from "../components/Atoms/Cursor";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import Particle from "../components/Atoms/Particle/Particle";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  const hoverEnter = () => setCursorVariant("hover");
  const cursorLeave = () => setCursorVariant("default");

  return (
    <>
      <Particle />
      <h1 className="background-title">Home.</h1>
      <Cursor cursorVariant={cursorVariant} />
      <Header hoverEnter={hoverEnter} cursorLeave={cursorLeave} />
      <Main footerText="See More About Me" footerPath="/about">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={cursorLeave}
          className="title"
        >
          Hey! I’m João Araujo, Frontend Developer.
        </h1>
        <p
          style={{
            marginTop: "15px",
            marginBottom: "30px",
            textAlign: "justify",
          }}
          className="paragraph"
        >
          Olá, aqui é o João, um cara de 16 anos apaixonado por transformar
          ideias em experiências interativas que realmente fazem a diferença.
          Especializado em Front-End, eu trago toda a energia jovem para o
          universo da programação, criando interfaces que não apenas funcionam,
          mas também impressionam.
        </p>
      </Main>
    </>
  );
}
