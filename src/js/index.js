//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.js";

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));

// set interval would happen in this file
let time = 0;
const SecondsCounter = () => {
	time++;

	const six = Math.floor(time / 100000);
	const five = Math.floor(time / 10000);
	const four = Math.floor(time / 1000);
	const three = Math.floor(time / 100);
	const two = Math.floor(time / 10);
	const one = Math.floor(time / 1);
	ReactDOM.render(
		<Home
			num1={one}
			num2={two}
			num3={three}
			num4={four}
			num5={five}
			num6={six}
		/>,
		document.querySelector("#app")
	);
};
setInterval(SecondsCounter, 1000);

// you will need to reload home component every second
// onclick event that will increase number plus one
// setinterval will have to call a function which will execute the previous two steps,
// number must be passed as props to the Home component
// send num props from here
