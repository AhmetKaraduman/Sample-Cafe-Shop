import React from "react";
import logo from "../assets/Logo2.png";
import { Link } from "react-router-dom";

function Logo(props) {
	return (
		<Link to="/">
			<img
				className={`${props.place} ${props.small}`}
				src={logo}
				alt="logo"
				id="logoImg"
			/>
		</Link>
	);
}

export default Logo;
