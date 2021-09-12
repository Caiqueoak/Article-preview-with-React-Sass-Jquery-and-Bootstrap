import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";

const Popup = () => {
	return (
		<ul id="toggle-container">
			<p id="share-text">SHARE</p>
			<li className="icons">
				<img
					src={require("../images/icon-facebook.svg").default}
					alt="facebook icon"
				/>
			</li>
			<li className="icons">
				<img
					src={require("../images/icon-twitter.svg").default}
					alt="twitter icon"
				/>
			</li>
			<li className="icons">
				<img
					src={require("../images/icon-pinterest.svg").default}
					alt="pinterest icon"
				/>
			</li>
		</ul>
	);
};
export default Popup;