import Blogs from "../sections/Blogs";
import Clients from "../sections/Clients";
import Faq from "../sections/Faq";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Inquiry from "../sections/Inquiry";
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
        <section><Inquiry /></section>
        <section><Blogs /></section>
       <section><Footer /></section>
      </>
    );
  }

  export default Home;