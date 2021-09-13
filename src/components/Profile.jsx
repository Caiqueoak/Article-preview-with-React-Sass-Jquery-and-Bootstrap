import React, { Component } from "react";
import Popup from "./Popup";
import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';

// Opens the icons container when the share button is clicked
function togglePopup() {
	const toggleContainer = $('#toggle-container');

	//toggleContainer.css('animation', 'hoverAnimation infinite 1s alternate');
	toggleContainer.css('max-height', '100px');
	toggleContainer.css('overflow', 'visible');
	toggleContainer.css('transform', 'translateY(-75px)');
}

const Profile = () => {
	return (
		<section className="container d-flex px-3 align-items-center" id="profile">
			<img
				src={require("../images/avatar-michelle.jpg").default}
				alt="profile pic"
				id="profile-img"
				className="rounded-circle img-fluid"
			/>
			<article className="container-fluid px-3">
				<p className="m-0" id="profile-name">
					Michelle Appleton
				</p>
				<p className="m-0" id="profile-date">
					28 Jun 2020
				</p>
			</article>

			<span id="button-container">
				<Popup />
				<button
					onClick={togglePopup}
					id="share-btn"
					className="rounded-circle d-flex align-items-center"
				>
					<img
						src={require("../images/icon-share.svg").default}
						alt="share icon"
					/>
				</button>
			</span>
		</section>
	);
};

export default Profile;