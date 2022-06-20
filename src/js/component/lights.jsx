import React, { useState } from "react";

const Lights = () => {
	const [clickedColor, setClickedColor] = useState("red");

	return (
		<div>
			<div className="top" />
			<div className="container">
				<div
					onClick={() => setClickedColor("red")}
					className={
						"light red" + (clickedColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setClickedColor("yellow")}
					className={
						"light yellow" +
						(clickedColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setClickedColor("green")}
					className={
						"light green" +
						(clickedColor === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Lights;
