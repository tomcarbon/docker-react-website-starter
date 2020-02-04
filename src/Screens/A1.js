/* HOME */
import React from "react";

import TCText from "../components/TCText";
import image1 from "../images/image1.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class A1 extends React.Component {

  static navigationOptions = {
	  title: "Home"
  };

  render() {
      return (
	<Container>
		<h2>Home</h2>

		<Row>
			<Col xs="12" sm="6">
				<img src={image1} style={{maxWidth: "100%"}} alt="oops"/>
			</Col>
			<Col>
				<TCText
					englishtext={"Welcome to the Website Starter!."}  
					spanishtext={"Bienvenido al sitio web de inicio!"}  
					langprefs={this.props.language_preference} >
				</TCText>
			</Col>
		</Row>

	</Container>
      );
  }
}

export default A1;
