import React from 'react';
import "../css/site.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo1 from "./Logo1";

class MyHeader extends React.Component {
	render() {
		var languageToUpdate = this.props.languageToUpdate;
		return (
			<div style={{height:"auto", backgroundColor:"#f0f8ff"}}>
				<Row>
				<Col xs="12" sm="6">
					<Logo1 />
				</Col>
				<Col xs="4" sm="3">
					<button style={languagebuttonstyle} onClick={() => languageToUpdate('english')}>English</button>
					<button style={languagebuttonstyle} onClick={() => languageToUpdate('spanish')}>Espanol</button>
				</Col>
				<Col xs="8" sm="3">
					<div>Ficticious Business </div>
					<div>1234 S Ficticious Ave</div>
					<div>Redondo Beach, CA 90278</div>
					<div>(310) 555-1212</div>
				</Col>
				</Row>
			</div>
		);
	}
}

const languagebuttonstyle = {
	float:"left", 
	height:"30px", 
	backgroundColor:"#e1ffe1", 
	marginLeft:"10px",
	borderRadius:"10px",
};

export default MyHeader;
