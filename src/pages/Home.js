import Clients from "../sections/Clients";
import Faq from "../sections/Faq";
import Features from "../sections/Features";
import Header from "../sections/Header";
import Methodology from "../sections/Methodology";
import Projects from "../sections/Projects";

function Home() {
    return (
      <>
        <section><Header /></section>
        <section><Methodology /></section>
        <section><Projects /></section>
        <section><Features /></section>
        <section><Clients /></section>
        <section><Faq /></section>
      </>
    );
  }

  export default Home;