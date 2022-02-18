import React from "react";
import Card from "./shared/Card";
import Context from "../context/Context";
import { useContext } from "react";

function ProductItem() {
	const { items } = useContext(Context);

	return (
		<div className="product-list">
			{items.map((item) => (
				<Card
					key={item.id}
					id={item.id}
					name={item.name}
					type={item.type}
					price={item.price}
					url={item.url}
					version={item.version}
				></Card>
			))}
		</div>
	);
}

export default ProductItem;
