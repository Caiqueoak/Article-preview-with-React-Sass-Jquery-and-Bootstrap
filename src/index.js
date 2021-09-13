
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import togglePopup from "./components/Profile";
import "./styles/main.css";
import $ from "jquery";

ReactDOM.render(<Main />, document.querySelector("#root"));

// Closes the share icons container when the user clicks out of it.

let mouseOver = false;

// Defines a boolean value for user's mouse in the icons container event.
$('#toggle-container').hover(() => {
    mouseOver = true;
  },
  () => {
    mouseOver = false;
  }
)

// Closes the icons container if its visible and the mouse its not over it.
$("*").on("click", () => {
	const toggleContainer = $('#toggle-container');

	if(!(toggleContainer.css('max-height') == '0px') && !mouseOver) {
    //toggleContainer.css('animation', 'slideDownAnimation linear .5s');
    toggleContainer.css('max-height', '0');
		toggleContainer.css('overflow', 'hidden');
		toggleContainer.css('transform', 'translateY(-40px)');
	}
});
