import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    // Formulaire Bootstrap pour les informations de contact
    <Form>
      <Form.Group controlId="formName">
        <Form.Control type="text" placeholder="Votre nom" />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mt-3">
        <Form.Control type="email" placeholder="Votre adresse email" />
      </Form.Group>
      <Form.Group controlId="formPhone" className="mt-3">
        <Form.Control type="text" placeholder="Votre numéro de téléphone" />
      </Form.Group>
      <Form.Group controlId="formSubject" className="mt-3">
        <Form.Control type="text" placeholder="Sujet" />
      </Form.Group>
      <Form.Group controlId="formMessage" className="mt-3">
        <Form.Control as="textarea" rows={8} placeholder="Votre message" />
      </Form.Group>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
