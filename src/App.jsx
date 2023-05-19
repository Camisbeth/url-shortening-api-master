import "./styles/global.scss";
import "./styles/variables.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LinkShortener from "./components/LinkShortener/LinkShortener";
import Statistics from "./components/Statistics/Statistics";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="Hero">
        <Hero />
      </section>

      <section className="section">
        <LinkShortener />

        <Statistics />

        <GetStarted />

        <Footer />
      </section>
      <a href="/#Hero">volver</a>
    </>
  );
}

export default App;
