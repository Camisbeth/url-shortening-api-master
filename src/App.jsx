import "./styles/global.scss";
import "./styles/variables.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LinkShortener from "./components/LinkShortener/LinkShortener";
import Statistics from "./components/Statistics/Statistics";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

function App() {
  return (
    <section className="sectionMain">
      <Navbar />
      <Hero />

      <section className="section">
        <LinkShortener />

        <Statistics />

        <Card />

        <GetStarted />

        <Footer />
      </section>
    </section>
  );
}

export default App;
