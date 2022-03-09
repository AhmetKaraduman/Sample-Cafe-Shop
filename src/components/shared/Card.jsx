import React from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import Context from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Card(props) {
	const { addCart, goesInfo } = useContext(Context);

	return (
		<div
			className="card-container"
			id={props.id}
			name={`/${props.name}/${props.type}`}
		>
			<div
				className="button-container"
				id={props.id}
				name={`/${props.name}/${props.type}`}
			>
				<button className="small-icon" id={props.id} onClick={addCart}>
					<FaShoppingCart id={props.id} />
				</button>
				<button
					className="small-icon"
					id={props.id}
					onClick={goesInfo}
					name={`/${props.name}/${props.type}`}
				>
					<Link
						to={`${props.name.replace(/\s/g, "")}/${props.type.replace(
							/\s/g,
							""
						)}`}
						name={`/${props.name}/${props.type}`}
					>
						<FaEye />
					</Link>
				</button>
			</div>
			<div className="card-img"></div>
			<div className="card-name">{props.name}</div>
			<div className="card-type">{props.type}</div>
			<div className="card-price">${props.price}</div>
		</div>
	);
}

export default Card;
