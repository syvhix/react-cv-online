import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Realisations.css";
// Importation des images utilisées dans la section des réalisations
import realisationsImage from "../assets/imgs/banner.jpg";
import freshFoodImage from "../assets/portfolio/fresh-food.jpg";
import restaurantAkiraImage from "../assets/portfolio/restaurant-japonais.jpg";
import espaceBienEtreImage from "../assets/portfolio/espace-bien-etre.jpg";

const Realisations = () => {
  // Définition d'un tableau d'objets contenant les informations sur chaque projet
  const projects = [
    {
      img: freshFoodImage,
      title: "Fresh food",
      description: "Réalisation d'un site avec commande en ligne.",
      technologies: "Site réalisé avec PHP et MySQL",
    },
    {
      img: restaurantAkiraImage,
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      technologies: "Site réalisé avec WordPress",
    },
    {
      img: espaceBienEtreImage,
      title: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      technologies: "Site réalisé avec HTML/CSS",
    },
  ];

  // Retourne le JSX qui structure la section des réalisations
  return (
    <section id="realisations" className="py-0">
      {/* Bannière des réalisations avec une image */}
      <div className="realisations-banner">
        <img src={realisationsImage} alt="Realisations" className="w-100" />
      </div>
      <Container className="py-5">
        {/* Titre de la section des réalisations */}
        <h2 className="text-center mb-4 realisations-title">PORTFOLIO</h2>
        {/* Description courte des réalisations */}
        <p className="text-center mb-4 fs-5">
          Voici quelques-unes de mes réalisations.
        </p>
        {/* Ligne décorative sous le texte descriptif */}
        <div
          className="border-bottom border-primary mx-auto mb-5"
          style={{ width: "20%", height: "4px" }}
        ></div>
        <Row>
          {/* Boucle sur le tableau des projets pour créer une carte pour chaque projet */}
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="project-card text-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="img-fluid mb-3 rounded"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Button variant="outline-primary" className="mb-3">
                  Voir
                </Button>
                {/* Technologies utilisées dans le projet */}
                <div className="tech-badge">
                  <p className="text-muted mb-0">{project.technologies}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Realisations;
