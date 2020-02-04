/*******************************************
* G1.js -- Directions
* *****************************************/
import React from "react";

import "../css/site.css";
import TCText from "../components/TCText";
import map1 from "../images/map1.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class G1 extends React.Component {

  static navigationOptions = {
	  title: "Directions"
  };

  render() {
      return (
	      <Container>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Directions"} 
				spanishtext={"Direcciones"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
	      <Row>
	      <Col className="text-styling" xs="12">
		<TCText
			englishtext={"We are located at: 1234 S Ficticious Ave Redondo Beach, CA 90278"} 
			spanishtext={"Estamos ubicados en: 1234 S Ficticious Ave Redondo Beach, CA 90278"} 
			langprefs={this.props.langprefs} >
		</TCText>
	      </Col>
	      <Col>
		<img src={map1} className="image-styling" alt="oops" />
	      </Col>
	      </Row>
	      </Container>
      );
  }
}

export default G1;
