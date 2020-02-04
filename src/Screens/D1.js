/*******************************************
* D1.js -- Testimonials
* *****************************************/
import React from "react";

import "../css/site.css";
import TCText from "../components/TCText";
import image1 from "../images/image1.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class D1 extends React.Component {

  static navigationOptions = {
	  title: "Testimonials"
  };

  render() {
      return (
	      <Container>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Testimonials"} 
				spanishtext={"Testimonios"}
				langprefs={this.props.langprefs} >
			</TCText>
		</h2>
	      <Row>
	      <Col xs="12" md="6">
		<img src={image1} className="image-styling" alt="oops"/>
	      </Col>
	      <Col className="text-styling" style={{background:"rgba(215,240,240,1)"}}>
			<TCText
				englishtext={"This site is exactly as I expected."}
				spanishtext={"Este sitio es exactamente como lo esperaba."} 
				langprefs={this.props.langprefs} >
			</TCText>
			<h5 style={{textAlign:"right"}}><TCText
				englishtext={"Tom C.- Los Angeles, CA"}
				spanishtext={"Tom C.- Los Angeles, CA"}
				langprefs={this.props.langprefs} >
			</TCText></h5>
	      </Col>
	      </Row>
	      </Container>
      );
  }
}

export default D1;
