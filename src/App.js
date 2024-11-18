import "./assets/css/style.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
      <div className="scroll-to-top" aria-label="Scroll to top">
        <i data-feather="arrow-up" />
      </div>
    </div>
  );
};

export default App;
