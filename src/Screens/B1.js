/*******************************************
* B1.js -- About Us
********************************************/
import React from "react";

import TCText from "../components/TCText";
import image2 from "../images/image2.jpg";
import "../css/site.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class B1 extends React.Component {


  render() {
      return (
		<Container>
			<h2 style={{textAlign:"left", marginTop:"20px"}}>
				<TCText
					englishtext={"Our Ficticious Store"} 
					spanishtext={"Nuestra tienda ficticia"}
					langprefs={this.props.langprefs} >
				</TCText>
			</h2>

			<Row>
			<Col xs="12" md="6" className="text-styling" style={{background:"rgba(240,240,215,1"}}>
					<TCText
						englishtext={"Since nothing is for sale here, please enjoy these royalty-free pictures from Alaska."}  
						spanishtext={"Como aquí no hay nada a la venta, disfrute de estas imágenes libres de regalías de Alaska."}
						langprefs={this.props.langprefs} >
					</TCText>
			</Col>
			<Col>
				<img src={image2} alt="oops" className="image-styling" />
			</Col>
	      		</Row>
		</Container>
      );
  }
}

export default B1;
