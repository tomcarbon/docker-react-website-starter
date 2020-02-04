/*******************************************
* E1.js -- Specials
* *****************************************/
import React from "react";

import "../css/site.css";
import TCText from "../components/TCText";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class E1 extends React.Component {

  static navigationOptions = {
	  title: "Our Specials"
  };

  render() {
      return (
	      <Container>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Specials"} 
				spanishtext={"Especials"}
				langprefs={this.props.langprefs} >
			</TCText>
	      	</h2>
	      		<Row>
			<Col xs="12">
				<img className="image-styling" src={ require('../images/coupon001.png') } alt="whoooooops." />
			</Col>
		      </Row>
	      </Container>
      );
  }
}

export default E1;
