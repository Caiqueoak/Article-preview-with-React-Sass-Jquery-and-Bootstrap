import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Popup extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div 
				id="toggle-container"
			>
				<p id="share-text">SHARE</p>
				<ul id="icons-container">
					<li className="icons">
						<a href="#">
							<img
								src={require("../images/icon-facebook.svg").default}
								alt="facebook icon"
							/>
						</a>
					</li>
					<li className="icons">
						<a href="#">
							<img
								src={require("../images/icon-twitter.svg").default}
								alt="twitter icon"
							/>
						</a>
					</li>
					<li className="icons">
						<a href="#">
							<img
								src={require("../images/icon-pinterest.svg").default}
								alt="pinterest icon"
							/>
						</a>
					</li>
				</ul>
				<div id="square"></div>
			</div>
		);
	}
}
export default Popup;
