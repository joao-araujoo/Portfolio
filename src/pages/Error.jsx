import Particle from "../components/Atoms/Particle/Particle";
import Main from "../components/Organisms/Main";

export default function Error() {
  document.title = "404 | Not Found";

  return (
    <>
      <Particle />
        <h1 className="background-title">Oops.</h1>
        <Main footerText="Go Back Home" footerPath="/">
          <h1 className="title" style={{ fontSize: "100px" }}>404</h1>
          <h1 className="title" style={{ marginBottom: "50px" }}>Nada pra ver por aqui.</h1>
      </Main>
    </>
  )
}
