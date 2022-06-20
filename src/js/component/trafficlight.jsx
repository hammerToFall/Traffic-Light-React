// import { check } from "prettier";
// import { element } from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lights from "./lights.jsx";

//create your first component

const TrafficLight = () => {
	return (
		<div>
			<Lights />
		</div>
	);
};

export default TrafficLight;
