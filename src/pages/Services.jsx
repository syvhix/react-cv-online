import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/Services.css";
import servicesImage from "../assets/imgs/banner.jpg";

const Services = () => {
  // Définition d'un tableau d'objets contenant les informations sur chaque service
  const services = [
    {
      icon: "fas fa-paint-brush",
      title: "UX DESIGN",
      description:
        "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.",
    },
    {
      icon: "fas fa-code",
      title: "DÉVELOPPEMENT WEB",
      description:
        "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
    },
    {
      icon: "fas fa-chart-line",
      title: "RÉFÉRENCEMENT",
      description:
        "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
    },
  ];

  // Retourne le JSX qui structure la section des services
  return (
    <section id="services" className="py-0 bg-light">
      <div className="services-banner">
        <img src={servicesImage} alt="Services" className="w-100" />
      </div>
      <Container className="py-5">
        <h2 className="text-center mb-4 services-title">
          MON OFFRE DE SERVICES
        </h2>
        <p className="text-center mb-4 fs-5">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div
          className="border-bottom border-primary mx-auto mb-4"
          style={{ width: "21%", height: "5px" }}
        ></div>
        <Row className="services-card-container">
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>
                    <i className={`${service.icon} fa-2x mb-3`}></i>
                  </Card.Title>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
