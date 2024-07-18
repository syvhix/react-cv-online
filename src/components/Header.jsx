import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// Importation de NavLink depuis react-router-dom pour la navigation
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // Barre de navigation de Bootstrap avec un thème sombre, fixe en haut et extensible en grand écran
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      {/* Nom de la marque avec un lien vers la page d'accueil */}
      <Navbar.Brand as={NavLink} to="/" className="nav-title">
        JOHN DOE
      </Navbar.Brand>
      {/* Bouton pour basculer la barre de navigation sur les petits écrans */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* Contenu de la barre de navigation qui peut être replié */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* Liens de navigation utilisant NavLink pour appliquer des styles actifs */}
          <Nav.Link as={NavLink} to="/">
            ACCUEIL
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services">
            SERVICES
          </Nav.Link>
          <Nav.Link as={NavLink} to="/realisations">
            RÉALISATIONS
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blog">
            BLOG
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            ME CONTACTER
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
