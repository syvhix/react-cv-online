import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Superposition de fond pour l'effet visuel */}
      <div className="background-overlay"></div>
      {/* Carte contenant le contenu principal de la page de contact */}
      <Card className="p-4" style={{ maxWidth: "90rem", width: "100%" }}>
        <h1 className="text-center mt-4">ME CONTACTER</h1>
        <p className="text-center">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        {/* Ligne décorative sous le texte descriptif */}
        <div
          className="border-bottom border-primary mb-5"
          style={{ width: "20%", height: "4px", margin: "0 auto" }}
        ></div>
        {/* Disposition en grille des colonnes pour le formulaire de contact et les coordonnées */}
        <Row>
          <Col md={6}>
            <h3>Formulaire de contact</h3>
            <div
              className="border-bottom border-primary mb-4"
              style={{ width: "100%", height: "2px", margin: "0" }}
            ></div>
            <ContactForm />
          </Col>
          <Col md={6}>
            <h3>Mes coordonnées</h3>
            <div
              className="border-bottom border-primary mb-4"
              style={{ width: "100%", height: "2px", margin: "0" }}
            ></div>
            <p>
              40 Rue Laure Diebold, 69009 Lyon, France
              <br />
              06 20 30 40 50
            </p>
            {/* Inclusion d'une carte Google Maps */}
            <div>
              <iframe
                title="John Doe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.9388128462734!2d4.813015215504836!3d45.768932379105755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1fa2e2d11b3%3A0xf3387b5e64ab2439!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1600073118162!5m2!1sen!2sus"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Contact;
