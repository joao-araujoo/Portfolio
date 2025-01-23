import ContactForm from "../components/Atoms/ContactForm";
import Particle from "../components/Atoms/Particle/Particle";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";

export default function Contact() {
  document.title = "Contact | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">Contato.</h1>
      <Header />
      <Main footerText="Voltar Para Home" footerPath="/">
        <h1 className="title">Contato.</h1>
        <ContactForm />
      </Main>
    </>
  );
}
