import React from "react";
import { Card } from "react-bootstrap";
import './AboutUs.css'

const AboutUsCard = (props) => {
  return (
    <div>
      <Card className="about-cardRounded" id="about-cardRounded" style={{ width: props.width }}>
        <Card.Img className="about-cardRounded2" id="about-cardRounded2" variant="bottom,top" src={props.image} />
        <Card.Body>
          <Card.Title> <h4>{props.title}</h4> </Card.Title>
          <Card.Text>
            <h6>{props.text1}</h6>
          </Card.Text>
          <Card.Text>
            <p className="small">{props.text2}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutUsCard;
