import React, { Component } from "react";
import $ from "jquery";
import Popup from "./Popup";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.css";

// Opens the icons container when the share button is clicked
function togglePopup() {
	const toggleContainer = $('#toggle-container');

	toggleContainer.css('max-height', '100px');
	toggleContainer.css('overflow', 'visible');
	toggleContainer.css('transform', 'translateY(-75px)');

}

class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			popupState: true,
			className: 'toggle-off'
		}
		//this.togglePopup = this.togglePopup.bind(this)
	}

	/*togglePopup() {
		this.setState(state => ({
			popupState: !state.popupState,
			className: state.popupState ? 'toggle-on' : 'toggle-off'
		}))
	}*/

	render() {
		return (
			<span id="button-container">
				<Popup />
				<button
					id="share-btn"
					onClick={togglePopup}
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
