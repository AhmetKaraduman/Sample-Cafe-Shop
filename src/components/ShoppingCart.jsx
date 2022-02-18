import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Context from "../context/Context";
import { useContext } from "react";

function ShoppingCart() {
	const { openCart } = useContext(Context);

	return (
		<div className="shopping-cart" onClick={openCart}>
			<FaShoppingCart />
		</div>
	);
}

export default ShoppingCart;
