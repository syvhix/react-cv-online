import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import FooterColumn from "./FooterColumn";
import "../style/Footer.css";

const Footer = () => {
  // Utilisation du hook useEffect pour ajouter un événement de défilement
  useEffect(() => {
    // Définition de la fonction handleScroll pour afficher ou masquer le bouton de retour en haut
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById("scrollToTopButton");
      if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    // Ajout de l'événement de défilement à la fenêtre
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Suppression de l'événement de défilement lors du démontage du composant
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour faire défiler la page vers le haut avec un comportement fluide
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <Container className="flex-grow-1">
        <Row>
          {/* Colonne du footer pour les informations de contact */}
          <FooterColumn
            title="John Doe"
            content={
              <div>
                <p>
                  40 Rue Laure Diebold
                  <br />
                  69009 Lyon, France
                  <br />
                  Téléphone : 06 20 30 40 50
                </p>
                <div>
                  {/* Liens vers les réseaux sociaux avec des icônes */}
                  <a
                    href="https://github.com/"
                    className="text-dark me-3 social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fs-2"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="text-dark me-3 social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter fs-2"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="text-dark me-3 social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in fs-2"></i>
                  </a>
                </div>
              </div>
            }
          />
          {/* Colonne du footer pour les liens utiles */}
          <FooterColumn
            title="Liens utiles"
            links={[
              { href: "/", text: "Accueil" },
              { href: "/", text: "À propos" },
              { href: "/services", text: "Services" },
              { href: "/contact", text: "Me contacter" },
              { href: "/mentionslegales", text: "Mentions légales" },
            ]}
          />
          {/* Colonne du footer pour les dernières réalisations */}
          <FooterColumn
            title="Mes dernières réalisations"
            links={[
              { href: "/realisations", text: "Fresh food" },
              { href: "/realisations", text: "Restaurant Akira" },
              { href: "/realisations", text: "Espace bien-être" },
            ]}
          />
          {/* Colonne du footer pour les derniers articles */}
          <FooterColumn
            title="Mes derniers articles"
            links={[
              { href: "/blog", text: "Coder son site en HTML/CSS" },
              { href: "/blog", text: "Vendre ses produits sur le web" },
              { href: "/blog", text: "Se positionner sur Google" },
            ]}
          />
        </Row>
      </Container>
      <div className="footer-dark">
        <div className="footer-bottom">
          <p className="m-0 py-2 text-center text-white">
            &copy; Designed by John Doe
            {/* Bouton de retour en haut de la page */}
            <span
              id="scrollToTopButton"
              className="scroll-to-top"
              onClick={scrollToTop}
            >
              ⬆
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
