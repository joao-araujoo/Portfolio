import FooterLink from "./components/Molecules/FooterLink";
import animateBackground from "./utils/animateBackground";

export default function App() {
  animateBackground();

  return (
    <>
      <h1>Hey, I’m João Araujo, Frontend Developer.</h1>    
      <FooterLink path="#" text="See More About Me" />
      <FooterLink path="#" text="Lets Continue To Projects" />
      <FooterLink path="#" text="Lets Go To My Resume." />
      <FooterLink path="#" text="Are you convinced to contact me now ?" />
      <FooterLink path="#" text="Go Back Home" />
    </>
  );
}
