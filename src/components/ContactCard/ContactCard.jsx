import { useForm, ValidationError } from "@formspree/react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCardImage,
  MDBCol,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import "./ContactCard.css";

function ContactCard() {
  const [state, handleSubmit] = useForm("xoqozejj");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (state.succeeded) {
    return (
      <MDBContainer>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>¡Gracias por tu comentario!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tu mensaje a sido enviado exitosamente</Modal.Body>
        </Modal>
        <ContactCard />
      </MDBContainer>
    );
  }

  return (
    <MDBContainer
      fluid
      className="my-5 cascading-right mx-auto translucent-background"
    >
      <MDBRow className="g-0 align-items-center justify-content-center">
        <MDBCol md="6">
          <MDBCard
            className="my-5 cascading-right mx-auto"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">¡Deja tu comentario!</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4 d-flex flex-column align-items-center">
                  <Form.Label htmlFor="email">Correo</Form.Label>
                  <MDBInput name="email" id="email" type="email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-4 d-flex flex-column align-items-center">
                  <Form.Label htmlFor="message">Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    id="message"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-2"
                  onClick={handleShow}
                >
                  Enviar
                </Button>
              </Form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="g-0 align-items-center">
        <MDBCol col="6">
          <MDBCardImage></MDBCardImage>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactCard;
