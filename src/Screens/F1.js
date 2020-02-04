/*******************************************
* F1.js -- Appointments
* *****************************************/
import React from "react";

import "../css/site.css";
import TCText from "../components/TCText";
import image5 from "../images/image5.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class F1 extends React.Component {

  static navigationOptions = {
	  title: "Appointments"
  };

  render() {
      return (
	      <Container>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Appointments"} 
				spanishtext={"Equipo"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
	      <Row>
	      <Col className="text-styling" style={{background:"rgba(240,215,240,1)"}} xs="12" md="6">
		<TCText
			englishtext={"No appointment is necessary, but please feel free to call us at (310) 555-1212."} 
			spanishtext={"No es necesaria una cita, pero no dude en llamarnos al (310) 555-1212."} 
			langprefs={this.props.langprefs} >
		</TCText>
	      </Col>
	      <Col>
		<img src={image5} alt="oops" className="image-styling"/>
	      </Col>
	      </Row>
	      </Container>
      );
  }
}

export default F1;
