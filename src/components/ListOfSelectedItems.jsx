import React from "react";
import SelectedItem from "./SelectedItem";
import { Link } from "react-router-dom";

function ListOfSelectedItems() {
	// const { selectedItem } = useContext(Context);
	// const totalPrice = selectedItem.reduce((acc, item) => acc + item.price, 0);
	return (
		<div className="list-selected-items">
			<SelectedItem />

			{/* <div className="total-price">
				<span>Total Price: </span>
				{selectedItem.length === 0 ? null : (
					<span id="sum-price">${totalPrice.toFixed(2)}</span>
				)}
			</div> */}

			<Link to="/" id="link" className="checkout-now">
				CHECKOUT NOW
			</Link>
		</div>
	);
}

export default ListOfSelectedItems;
