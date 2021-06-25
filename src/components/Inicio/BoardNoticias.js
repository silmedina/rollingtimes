import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import Moment from 'moment';

const BoardNoticias = (props) => {
  const formatearFecha = (fecha) => {
    Moment.locale('es');
    let fechaFormateada = Moment(fecha).format('LLLL');
    return fechaFormateada;
  }

  return (
    <Container className="mb-4 mt-4">
      <CardDeck>
        {props.noticias.map((not) => (
          <Card>
            <Card.Img variant="top" src={not.imagen} />
            <Card.Body>
              <Card.Title>{not.titulo}</Card.Title>
              <Card.Text>
                {not.text}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{formatearFecha(not.fecha)}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
};

export default BoardNoticias;
