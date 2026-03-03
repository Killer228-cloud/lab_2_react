import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}

export default App;