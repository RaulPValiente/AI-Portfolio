import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import CareerJourney from "./components/CareerJourney/CareerJourney";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-green focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <CareerJourney />
      </main>

      <Footer />
    </div>
  );
};

export default App;
