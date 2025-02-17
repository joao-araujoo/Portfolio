import Particle from "../components/Atoms/Particle/Particle";
import Main from "../components/Organisms/Main";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Thanks() {
  document.title = "Obrigado! | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">Obrigado.</h1>
      <Main footerText="Go Back Home" footerPath="/">
        <h1 className="title" style={{ textAlign: "center", margin: "30px auto" }}>
          <MdOutlineMarkEmailRead size={200} />
          <br />
          Obrigado por entrar em contato!
        </h1>
      </Main>
    </>
  );
}
