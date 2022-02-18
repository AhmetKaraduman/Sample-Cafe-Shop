import React from "react";
import ProductContent from "../ProductContent";
import Context from "../../context/Context";
import { useContext } from "react";
import Message from "../Message";
import CheckBoxMessage from "../CheckBoxMessage";

function Products() {
	const { hideInfo } = useContext(Context);

	return (
		<div className="products" onWheel={hideInfo}>
			<Message />
			<CheckBoxMessage />
			<div className="products-bg"></div>
			<div className="container">
				<h1>PRODUCTS</h1>
				<div className="line"></div>
				<div className="products-content">
					<ProductContent />
				</div>
			</div>
		</div>
	);
}

export default Products;
