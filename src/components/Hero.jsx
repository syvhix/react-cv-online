import React from "react";
import { Container, Button } from "react-bootstrap";
import backgroundImage from "../assets/imgs/hero.jpg";

// Définition du composant Hero qui prend une fonction onScrollToAbout en prop
const Hero = ({ onScrollToAbout }) => {
  // Style CSS pour la section Hero, incluant l'image de fond et les propriétés de mise en page
  const heroStyle = {
    height: "100vh",
    background: `url(${backgroundImage}) no-repeat center center/cover`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    // Conteneur fluide couvrant toute la largeur de l'écran et appliquant le style heroStyle
    <Container fluid style={heroStyle}>
      <div className="text-center text-white fs-1">
        <h1>Bonjour, je suis John Doe</h1>
        <h3>Développeur web full stack</h3>
        {/* Bouton qui déclenche la fonction onScrollToAbout lorsqu'il est cliqué */}
        <Button variant="primary" onClick={onScrollToAbout}>
          En savoir plus
        </Button>
      </div>
    </Container>
  );
};

export default Hero;
