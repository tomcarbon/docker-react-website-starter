/*******************************************
* C1.js -- Services
* *****************************************/
import React from "react";
import "../css/site.css";

import TCText from "../components/TCText";
import image3 from "../images/image3.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class C1 extends React.Component {

  static navigationOptions = {
	  title: "Services"
  };

  render() {
      return (
	      <Container>
		<h2 style={{textAlign:"left"}}>
			<TCText
				englishtext={"Services"} 
				spanishtext={"Servicios"}
				langprefs={this.props.langprefs} >
			</TCText>
		</h2>
	      <Row>
		<Col xs="12" md="8">
			<img src={image3}  alt="oops" className="image-styling" />
		</Col>
	      <Col className="text-styling" style={{background:"rgba(240,240,215,1)"}}>
	      <h5>
		<TCText
			englishtext={"The Services are listed here"} 
			spanishtext={"Los servicios se enumeran aquí"}
			langprefs={this.props.langprefs} >
		</TCText>
	      </h5>
		<TCText
			englishtext={"Services #1"} 
			spanishtext={"Servicios n. ° 1"}
			langprefs={this.props.langprefs} >
		</TCText>
	     		<h5 style={{textAlign: "right"}} >
				<TCText 
					englishtext={"The description for service #1"} 
					spanishtext={"La descripción del servicio n. ° 1"}
					langprefs={this.props.langprefs} >
				</TCText>
	      		</h5>
		<TCText
			englishtext={"Services #2"} 
			spanishtext={"Servicios n. ° 2"}
			langprefs={this.props.langprefs} >
		</TCText>
	     		<h5 style={{textAlign: "right"}} >
				<TCText 
					englishtext={"The description for service #2"} 
					spanishtext={"La descripción del servicio n. ° 2"}
					langprefs={this.props.langprefs} >
				</TCText>
	      		</h5>
		<TCText
			englishtext={"Services #3"} 
			spanishtext={"Servicios n. ° 3"}
			langprefs={this.props.langprefs} >
		</TCText>
	     		<h5 style={{textAlign: "right"}}> 
				<TCText 
					englishtext={"The description for service #3"} 
					spanishtext={"La descripción del servicio n. ° 3"}
					langprefs={this.props.langprefs} >
				</TCText>
	      		</h5>
	      </Col>
	      </Row>

	      </Container>
      );
  }
}

export default C1;
