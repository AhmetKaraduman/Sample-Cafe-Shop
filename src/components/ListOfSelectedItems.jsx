import React from "react";
import SelectedItem from "./SelectedItem";
import { Link } from "react-router-dom";

function ListOfSelectedItems() {
	return (
		<div className="list-selected-items">
			<SelectedItem />

			<Link to="/" id="link" className="checkout-now">
				CHECKOUT NOW
			</Link>
		</div>
	);
}

export default ListOfSelectedItems;
