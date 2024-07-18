import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./style/Header.css";
import "./style/index.css";
import "./style/Contact.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import GitHubProfile from "./pages/GItHubProfile";
const App = () => {
  // Utilisation du hook useRef pour créer une référence vers l'élément "About"
  const aboutRef = useRef(null);

  // Fonction pour faire défiler la page jusqu'à la section "About"
  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Retourne le JSX qui structure l'application
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="main-content flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onScrollToAbout={handleScrollToAbout} />
                <Container ref={aboutRef}>
                  <About />
                </Container>
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="/github-profile" element={<GitHubProfile />} />
        </Routes>
      </div>
      {/* Inclusion du composant Footer */}
      <Footer />
    </div>
  );
};

export default App;
