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
          Hello, this is João, a 16-year-old guy passionate about turning ideas
          into interactive experiences that truly make a difference. Specialized
          in Front-End, I bring all the youthful energy to the programming
          world, creating interfaces that not only work but also impress.
        </p>
      </Main>
    </>
  );
}
