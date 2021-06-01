import React from "react";
import Card from "./Card";
import "./Subscription.css";
import { Container, Row, Col } from "react-bootstrap";

const Subscription = () => {
    
  return (
    <div className="bg-subs">
      <Container className="bg-subs2">
        <h1 className="text-center pt-5 pb-3">Informate de la actualidad</h1>
        <h4 className="text-center text-secondary">No te quedes desinformado del dia a dia</h4>
        <Row className="d-flex  h-100 py-5">
          <Col className="mb-3">
            <Card title="RollingTimes Estándar" precio="GRATIS"  texto="Acceso ilimitado online de RollingTimes + Acceso a los comentarios" reference=""></Card>
          </Col>
          <Col className="mb-3">
            <Card title="RollingTimes Premium"  precio="Precio: $150" texto="Acceso ilimitado online de RollingTimes + Acceso a los comentarios + Guardar noticias para mas tarde" reference=""></Card>
          </Col>
          <Col className="mb-3">
            <Card title="RollingTimes Full" tex precio="Precio: $250" texto="Acceso ilimitado online de RollingTimes + Acceso a los comentarios + Guardar noticias para mas tarde + Tarjeta RollingTimes" reference=""></Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscription;
