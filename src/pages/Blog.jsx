import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../style/Blog.css";

// Importation des images nécessaires pour la bannière et les articles du blog
import bannerImage from "../assets/imgs/banner.jpg";
import coderImage from "../assets/blog/coder.jpg";
import croissanceImage from "../assets/blog/croissance.jpg";
import googleImage from "../assets/blog/google.jpg";
import screensImage from "../assets/blog/screens.jpg";
import seoImage from "../assets/blog/seo.jpg";
import technosImage from "../assets/blog/technos.png";

// Définition d'un tableau d'objets contenant les informations des articles du blog
const articles = [
  {
    image: coderImage,
    title: "Coder son site en HTML/CSS",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "22 août 2022",
  },
  {
    image: croissanceImage,
    title: "Vendre ses produits sur le web",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "20 août 2022",
  },
  {
    image: googleImage,
    title: "Se positionner sur Google",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "1 août 2022",
  },
  {
    image: screensImage,
    title: "Coder en responsive design",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "31 juillet 2022",
  },
  {
    image: seoImage,
    title: "Techniques de référencement",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "30 juillet 2022",
  },
  {
    image: technosImage,
    title: "Apprendre à coder",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "12 juillet 2022",
  },
];

const Blog = () => {
  return (
    <div>
      {/* Section de la bannière du blog */}
      <div className="blog-banner">
        <img src={bannerImage} alt="Banner" className="w-100" />
      </div>
      <div className="blog-header">
        <Container>
          <h1 className="text-center">BLOG</h1>
          <p className="text-center">
            Retrouvez ici quelques articles sur le développement web.
          </p>
          {/* Ligne décorative sous le texte descriptif */}
          <div
            className="border-bottom border-primary mb-4"
            style={{ width: "25%", height: "3px", margin: "0 auto" }}
          ></div>
        </Container>
      </div>
      {/* Contenu des articles du blog */}
      <Container className="py-4">
        <Row>
          {/* Boucle sur chaque article du tableau articles pour créer une carte */}
          {articles.map((article, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={article.image} />
                <Card.Body>
                  <Card.Title className="fs-2">{article.title}</Card.Title>
                  <Card.Text>{article.text}</Card.Text>
                  {/* Bouton pour lire la suite de l'article */}
                  <Button variant="primary">Lire la suite</Button>
                </Card.Body>
                {/* Pied de la carte avec la date de publication */}
                <Card.Footer className="text-muted">
                  Publié le {article.date}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
