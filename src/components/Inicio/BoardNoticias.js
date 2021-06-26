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
        {props.noticias.map((noticia) => (
          <Card>
            <Card.Img variant="top" src={noticia.imagen} />
            <Card.Body>
              <Card.Title>{noticia.titulo}</Card.Title>
              <Card.Text>
                {noticia.subtitulo}
                <div id="notfoundlinks" className="mt-3">
                  <Card.Link href={`/noticia/${noticia._id}`}>Ir a la noticia</Card.Link>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{formatearFecha(noticia.fecha)}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
};

export default BoardNoticias;
