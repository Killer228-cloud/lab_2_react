import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const appStyle = {
    minHeight: "100vh",
    background: theme === "dark" ? "#111827" : "#ffffff",
    color: theme === "dark" ? "#000000" : "#000000",
    paddingBottom: "20px",
  };

  return (
    <div style={appStyle}>
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {theme === "light" ? "Нічна тема" : "Денна тема"}
      </button>

      <Header />

      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Languages />
        <Reviews />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;