import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Jatin Panday </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am a Software / Web Developer and currently learning and getting Experience with the best coding practices.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech, Auto & Cosmos Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't Stop Untill you get it there !"{" "}
          </p>
          <footer className="blockquote-footer">Jatin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
