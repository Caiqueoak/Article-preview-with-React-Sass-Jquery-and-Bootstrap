import React, { Component } from "react";
import $ from "jquery";
import Popup from "./Popup";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.css";

class Button extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
			className: 'toggle-container-'
    }
	}

	render() {
		return (
			<span id="button-container">
				<Popup className={() => this.state.className + }/>
				<button
					onClick={this.togglePopup}
					id="share-btn"
					className="rounded-circle d-flex align-items-center"
				>
					<img
						src={require("../images/icon-share.svg").default}
						alt="share icon"
					/>
				</button>
			</span>
		);
	}
}

export default Button;
