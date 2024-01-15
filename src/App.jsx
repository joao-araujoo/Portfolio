import Footer from "./components/Organisms/Footer";
import Header from "./components/Organisms/Header";
import Main from "./components/Organisms/Main";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <h1>Hey! I’m João Araujo, Frontend Developer.</h1>
        <p style={{ marginTop: "15px", marginBottom: "30px" }} className="paragraph">Olá, aqui é o João, um cara de 16 anos apaixonado por transformar ideias em experiências interativas que realmente fazem a diferença. Especializado em Front-End, eu trago toda a energia jovem para o universo da programação, criando interfaces que não apenas funcionam, mas também impressionam.</p>
        <Footer text="See More About Me" path="#" />
      </Main>
    </>
  );
}
