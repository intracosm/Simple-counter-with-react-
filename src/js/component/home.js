import propTypes from "prop-types";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = (props) => {
	return (
		<div className="vw-100 vh-100 ">
			<div className="big-container bg-white d-flex">
				<div className="clock">
					<i className="far fa-clock"></i>
					<div className="six">{props.num6 % 10}</div>
					<div className="five">{props.num5 % 10}</div>
					<div className="four">{props.num4 % 10}</div>
					<div className="three">{props.num3 % 10}</div>
					<div className="two">{props.num2 % 10}</div>
					<div className="one">{props.num1 % 10}</div>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	num1: propTypes.number,
	num2: propTypes.number,
	num3: propTypes.number,
	num4: propTypes.number,
	num5: propTypes.number,
	num6: propTypes.number,
};
