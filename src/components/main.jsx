import React, { Component } from "react";
import Footer from "./Footer";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.css";

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				{/* MAIN CONTAINER */}
				<div 
					id="main-wrapper" 
					className="d-flex align-items-center"
				>
					<main
						className="container p-0 pb-4 p-md-0 row mx-auto"
						id="main-container"
					>
						{/* MAIN IMAGE */}
						<div id="img-wrapper" className="p-0 col-12 col-md-6">
							<img
								src={require("../images/drawers.jpg").default}
								alt="drawers"
								className="w-100 h-100 mx-auto p-0"
								id="main-image"
							/>
						</div>

						{/* TEXT SECTION */}
						<section
							id="text-section"
							className="col-12 col-md pb-md-4 px-md-4 d-md-flex flex-column justify-content-center"
						>
							{/* DESCRIPTION TEXT */}
							<div className="px-3" id="text-section-container">
								<h2 id="header-text" className="pb-1 pt-md-4">
									Shift the overall look and feel by adding these wonderful
									touches to furniture in your home
								</h2>
								<p id="description-text" className="pb-2">
									Ever been in a room and felt like something was missing?
									Perhaps it felt slightly bare and uninviting. I’ve got some
									simple tips to help you make any room feel complete.
								</p>
							</div>

							{/* PROFILE SECTION */}
							<Profile />
						</section>
					</main>

					<Footer />
				</div>
			</>
		);
	}
}

export default Main;
