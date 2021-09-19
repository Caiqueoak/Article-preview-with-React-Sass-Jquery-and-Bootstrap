import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import "./styles/main.css";
import $ from "jquery";

ReactDOM.render(<Main />, document.querySelector("#root"));

// Closes the share icons container when the user clicks out of it.

let mouseOver = false;

// Defines a boolean value for user's mouse in the icons container event.
$("#toggle-container").hover(
	() => {
		mouseOver = true;
	},
	() => {
		mouseOver = false;
	}
);

// Closes the icons container if its visible and the mouse its not over it.
$("*").on("click", () => {
	const toggleContainer = $("#toggle-container");
	const shareButton = $("#share-btn");
	const shareIcon = $("#share-icon");

	if (!(toggleContainer.css("max-height") == "0px") & !mouseOver) {
		toggleContainer.css("max-height", "0");
		toggleContainer.css("overflow", "hidden");
		toggleContainer.css("transform", "translateY(-40px)");
		shareButton.css("background-color", "hsl(210, 46%, 95%)");
		shareIcon.css("filter", "none");
	}
});

//media querie to change toggle container dimensions and translation

let media = window.matchMedia("(max-width: 768px)");

function checkMedia(resolution) {
	const toggleContainer = $("#toggle-container");

	if (toggleContainer.css("max-height") != "0px") {
		if (resolution.matches) {
			toggleContainer.css("transform", "translateY(-115px)");
			toggleContainer.css("max-height", "245px");
		} else {
			toggleContainer.css("max-height", "100px");
			toggleContainer.css("transform", "translateY(-75px)");
		}
	}
}

media.addEventListener("change", checkMedia);
