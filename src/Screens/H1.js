/*******************************************
* H1.js -- Employment
* *****************************************/
import React from "react";

import "../css/site.css";
import TCText from "../components/TCText";
import image4 from "../images/image4.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class H1 extends React.Component {

  static navigationOptions = {
	  title: "Employment"
  };

  render() {
      return (
	      <Container>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Employment"} 
				spanishtext={"Empleo"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
	      <Row>
	      <Col className="text-styling" xs="12" md="6">
		<TCText
			englishtext={"We are looking for a talented and resourceful person to join our team!"} 
			spanishtext={"¡Estamos buscando un mecánico talentoso e ingenioso para unirse a nuestro equipo!"} 
			langprefs={this.props.langprefs} >
		</TCText>
	      </Col>
	      <Col>
		<img src={image4} alt="oops" className="image-styling"/>
	      </Col>
	      </Row>
	      </Container>
      );
  }
}

export default H1;
