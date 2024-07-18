import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import aboutImage from "../assets/imgs/john-doe-about.jpg";

const About = () => {
  // Tableau contenant les compétences et leur niveau associé
  const skills = [
    { name: "HTML5", value: 90, color: "danger" },
    { name: "CSS3", value: 80, color: "info" },
    { name: "JavaScript", value: 70, color: "warning" },
    { name: "PHP", value: 60, color: "success" },
    { name: "React", value: 50, color: "primary" },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="shadow-lg p-4 bg-white rounded">
          {/* Colonne de gauche avec le texte À propos */}
          <Col md={6}>
            <h2 className="mb-4">À propos</h2>
            {/* Ligne décorative sous le titre */}
            <div
              className="border-bottom border-primary mb-4"
              style={{ width: "100%", height: "3px" }}
            ></div>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation d'intégrateur-développeur web au CEF. Au cours
              de cette formation, j'ai pu acquérir des bases solides pour
              travailler dans le domaine du développement web.
            </p>
            <p>
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une
              agence digitale pour consolider ma formation de développeur web
              full stack.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </Col>
          {/* Colonne de droite avec l'image et les compétences */}
          <Col md={6} className="d-flex flex-column align-items-center">
            <img
              src={aboutImage}
              alt="About"
              className="img-fluid rounded mb-4"
            />
            <h3 className="mb-4">Mes compétences</h3>
            {/* Boucle sur chaque compétence pour créer une barre de progression */}
            {skills.map((skill, index) => (
              <div key={index} className="w-100 mb-2">
                <span>{skill.name}</span>
                <ProgressBar
                  now={skill.value}
                  variant={skill.color}
                  className="mb-2"
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
