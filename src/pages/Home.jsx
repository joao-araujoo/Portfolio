import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import Particle from "../components/Atoms/Particle/Particle";

export default function Home() {
  document.title = "Home | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">Home.</h1>
      <Header />
      <Main
        footerText="See More About Me"
        footerPath="/about"
        style={{ paddingTop: "200px" }}
      >
        <h1 className="title" style={{ fontSize: "30px" }}>
          Hey! I’m João Araujo, Frontend Developer.
        </h1>
        <p
          style={{
            marginTop: "15px",
            marginBottom: "30px",
          }}
          className="paragraph"
        >
          Olá, eu sou o João, um jovem de 17 anos apaixonado por transformar
          ideias em experiências interativas que realmente fazem a diferença.
          Especializado em Front-End, trago entusiasmo e inovação para o mundo
          da programação, criando interfaces que não apenas funcionam, mas
          também impressionam.
        </p>
      </Main>
    </>
  );
}
