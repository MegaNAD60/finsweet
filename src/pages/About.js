import Aboutus from "../about/Aboutus";
import Header from "../about/Header";
import Footer from "../sections/Footer"
import Process from "../about/Process";
import Mission from "../about/Mission";
import Benefits from "../about/Benefits";
import Team from "../about/Team";

function About() {
    return (
      <>
        <section>{<Header />}</section>
        <section>{<Aboutus />}</section>
        <section>{<Process />}</section>
        <section>{<Mission />}</section>
        <section>{<Benefits />}</section>
        <section>{<Team />}</section>
        <section>{<Footer />}</section>
      </>
    );
  }

  export default About;