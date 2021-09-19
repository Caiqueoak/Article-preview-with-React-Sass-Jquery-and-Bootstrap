import React, { Component } from "react";
import $ from "jquery";
import Popup from "./Popup";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.css";


// Opens the icons container when the share button is clicked
function togglePopup() {
	const toggleContainer = $('#toggle-container');
	const shareButton = $('#share-btn');
	const shareIcon = $('#share-icon');
	let media = window.matchMedia('(max-width: 767px)');

	if(media.matches) {
		toggleContainer.css('transform', 'translateY(-115px)');
		toggleContainer.css('max-height', '245px');
	}
	else {
		toggleContainer.css('max-height', '100px');
		toggleContainer.css('transform', 'translateY(-75px)');
	}
	toggleContainer.css('overflow', 'visible');
	shareButton.css('background-color', 'hsl(212, 23%, 69%)');
	shareIcon.css('filter', 'invert(100%) sepia(100%) saturate(50%) hue-rotate(50deg) brightness(1000%) contrast(100%)')
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
						id='share-icon'
						src={require("../images/icon-share.svg").default}
						alt="share icon"
					/>
				</button>
			</span>
		);
	}
}

export default Button;
