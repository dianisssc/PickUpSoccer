import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchBtn from "../components/SearchBtn"

function PlayerList() {
    return (
      <div>
       
        <Hero backgroundImage="https://new.venuesnow.com/wp-content/uploads/2017/02/C4-DWDfWAAAdy1u.jpg-large_-2.jpeg">
          <h1>Your D' one to pick your squad tonight!</h1>
          <h2>Get in contact and start kickin' it!</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
             
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
          
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default PlayerList;
  