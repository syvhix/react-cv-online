import React from "react";
import { Container, Accordion } from "react-bootstrap";
// Importation des icônes depuis FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../style/Mentionslegales.css";

const MentionsLegales = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {/* Conteneur principal des mentions légales */}
      <Container className="py-5 mentions-legales-container">
        <h1 className="text-center mentions-legales-title">MENTIONS LÉGALES</h1>
        {/* Ligne décorative sous le titre */}
        <div
          className="border-bottom border-primary mb-5"
          style={{ width: "20%", height: "4px", margin: "0 auto" }}
        ></div>
        {/* Accordéon pour les différentes sections des mentions légales */}
        <Accordion className="w-75">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h2>John Doe</h2>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 40 Rue Laure Diebold
                <br />
                69009 Lyon, France
                <br />
                <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                <a href="tel:0620304050">06 20 30 40 50</a>
                <br />
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Section Hébergeur */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h2>Always Data</h2>
              <p>
                91 rue du Faubourg Saint Honoré
                <br />
                75008 Paris
                <br />
                <FontAwesomeIcon icon={faGlobe} />{" "}
                <a
                  href="https://site-de-lhebergeur.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  site-de-lhebergeur.com
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Section Crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <p>
                Site développé par John Doe, étudiant du CEF.
                <br />
                Les images libres de droit sont issues du site{" "}
                <a
                  href="https://pixabay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>
                .
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default MentionsLegales;
