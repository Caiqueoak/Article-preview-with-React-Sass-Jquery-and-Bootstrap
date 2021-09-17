import React, { Component } from "react";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from './Button'

class Profile extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
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
	
				<Button />
			</section>
		);
	}
};

export default Profile;