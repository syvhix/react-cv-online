// Importation de la bibliothèque React et PropTypes pour la validation des types de props
import React from "react";
import PropTypes from "prop-types";
// Importation du composant Col de react-bootstrap pour la disposition
import { Col } from "react-bootstrap";

// Définition du composant FooterColumn avec destructuration des props
const FooterColumn = ({ title, content, links }) => {
  return (
    // Colonne Bootstrap avec une largeur de 3 sur les écrans moyens et plus grands
    <Col md={3}>
      <h5>{title}</h5>
      {content}
      {links && (
        <ul className="list-unstyled">
          {/* Mapping des liens pour créer des éléments de liste */}
          {links.map((link, index) => (
            // Utilisation de l'index comme clé pour chaque élément de liste
            <li key={index}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Col>
  );
};

// Validation des types des props avec PropTypes
FooterColumn.propTypes = {
  // Le titre est requis et doit être une chaîne de caractères
  title: PropTypes.string.isRequired,
  // Le contenu est optionnel et doit être un élément React
  content: PropTypes.element,
  // Les liens sont optionnels et doivent être un tableau d'objets avec des propriétés href et text
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FooterColumn;
