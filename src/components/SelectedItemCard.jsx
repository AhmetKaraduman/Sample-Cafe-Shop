import React from "react";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import Context from "../context/Context";

function SelectedItemCard(props) {
	const { deleteFromCart } = useContext(Context);

	return (
		<div className="selected-item-card" id={props.id}>
			<div className="img"></div>
			<div className="item-card-info">
				<div className="name-type">
					{props.name} - {props.type}
				</div>
				<div>{props.quantity}</div>
				<div>${props.price}</div>
			</div>
			<div className="options" id={props.id}>
				<FaTimes className="times" id={props.id} onClick={deleteFromCart} />
			</div>
		</div>
	);
}

export default SelectedItemCard;
