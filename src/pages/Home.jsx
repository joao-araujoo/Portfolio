import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import Particle from "../components/Atoms/Particle/Particle";

export default function Home() {
  document.title = "Home | João Araujo";
  const age =
    new Date() - new Date("2007-02-19") < 0
      ? -1
      : new Date().getFullYear() -
        new Date("2007-02-19").getFullYear() -
        (new Date().setFullYear(1970) <
          new Date("2007-02-19").setFullYear(1970));

  return (
    <>
      <Particle />
      <h1 className="background-title">Home.</h1>
      <Header />
      <Main
        footerText="Ver Mais Sobre Mim"
        footerPath="/about"
        style={{ paddingTop: "200px" }}
      >
        <h1 className="title" style={{ fontSize: "30px" }}>
          Olá! Eu sou o João Araujo, Desenvolvedor Fullstack.
        </h1>
        <p
          style={{
            marginTop: "15px",
            marginBottom: "30px",
          }}
          className="paragraph"
        >
          Me chamo João, um jovem de {age} anos apaixonado por transformar
          ideias em experiências interativas que realmente fazem a diferença.
          Especializado em Front-End, trago entusiasmo e inovação para o mundo
          da programação, criando interfaces que não apenas funcionam, mas
          também impressionam.
        </p>
      </Main>
    </>
  );
}
