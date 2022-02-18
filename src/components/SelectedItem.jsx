import React from "react";
import SelectedItemCard from "./SelectedItemCard";
import { motion, AnimatePresence } from "framer-motion";
import Context from "../context/Context";
import { useContext } from "react/cjs/react.development";

function SelectedItem() {
	const { selectedItem } = useContext(Context);

	return (
		<div>
			<AnimatePresence>
				{selectedItem.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<SelectedItemCard
							quality={item.quality}
							id={item.id}
							key={item.id}
							name={item.name}
							type={item.type}
							price={item.price}
							quantity={item.quantity}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default SelectedItem;
