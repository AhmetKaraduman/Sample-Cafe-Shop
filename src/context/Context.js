import { createContext } from "react";
import { useState } from "react";
import ProductData from "../data/ProductData";
import { useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [items, setItems] = useState(ProductData);
	const [selectedItem, setSelectedItem] = useState([]);
	const [infoPath, setinfoPath] = useState("/");

	// showcase2 panel animation
	const panelAnimations = (e) => {
		const panel = document.querySelectorAll(".panel");

		const id = e.target.id;
		panel.forEach((bg) =>
			id === bg.id || id === bg.innerHTML.id
				? bg.classList.toggle("active")
				: null
		);

		panel.forEach((bg) =>
			id !== bg.id ? bg.classList.remove(bg.classList[1]) : null
		);
	};

	// hide top of the navbar
	const hideInfo = () => {
		const navbar = document.querySelector(".navbar");
		const logoImg = document.querySelector("#logoImg");

		if (window.scrollY > 60) {
			navbar.classList.add("hide");
			logoImg.classList.add("small");
		}

		if (window.scrollY < 60) {
			navbar.classList.remove("hide");
			logoImg.classList.remove("small");
		}
	};

	// search bar
	const showInputArea = (e) => {
		const inputArea = document.querySelector(".input");
		const shoppingScreen = document.querySelector(".shopping-screen");

		inputArea.classList.toggle("show");
		inputArea.focus();
		if (shoppingScreen.classList.contains("show")) {
			shoppingScreen.classList.toggle("show");
		}
	};

	// shopping cart sheet
	const openCart = (e) => {
		const shoppingScreen = document.querySelector(".shopping-screen");
		const inputArea = document.querySelector(".input");

		shoppingScreen.classList.toggle("show");
		if (inputArea.classList.contains("show")) {
			inputArea.classList.toggle("show");
		}
	};

	const showAddedMessage = () => {
		const messageBar = document.querySelector(".message-container");
		// show message for adding
		messageBar.classList.add("show");
		setTimeout(() => {
			messageBar.classList.remove("show");
		}, 2000);
	};

	const chechBoxMessage = () => {
		const messageBarCheck = document.querySelector(".message-container-check");

		messageBarCheck.classList.add("show");
		setTimeout(() => {
			messageBarCheck.classList.remove("show");
		}, 3000);
	};

	const addCart = (e) => {
		const id = +e.target.parentElement.parentElement.id;
		if (selectedItem.map((item) => item.id).indexOf(id) < 0) {
			items.forEach((item) =>
				item.id === id
					? (setSelectedItem([item, ...selectedItem]), showAddedMessage())
					: null
			);
		} else {
			chechBoxMessage();
		}

		console.log(selectedItem);
	};

	const deleteFromCart = (e) => {
		const id = +e.target.parentElement.parentElement.id;
		console.log(id);
		selectedItem.forEach((item) =>
			item.id === id
				? setSelectedItem(selectedItem.filter((item) => item.id !== id))
				: null
		);

		console.log(selectedItem);
	};

	const goesInfo = (e) => {
		const ip =
			"/product" + e.target.parentElement.parentElement.name.replace(/\s/g, "");
		localStorage.setItem("path", ip);
		setinfoPath(ip);
	};

	useEffect(() => {
		setinfoPath(localStorage.getItem("path"));
	}, []);

	// useEffect(() => {
	// 	if (selectedItem.length === 0) {
	// 		const totalPrice = document.querySelector(".total-price");
	// 		const checkoutNow = document.querySelector(".checkout-now");

	// 		totalPrice.classList.add("hide");
	// 		checkoutNow.classList.add("hide");
	// 	} else {
	// 		const totalPrice = document.querySelector(".total-price");
	// 		const checkoutNow = document.querySelector(".checkout-now");

	// 		totalPrice.classList.remove("hide");
	// 		checkoutNow.classList.remove("hide");
	// 	}
	// }, [selectedItem]);

	return (
		<Context.Provider
			value={{
				panelAnimations,
				showInputArea,
				hideInfo,
				openCart,
				addCart,
				deleteFromCart,
				goesInfo,
				items,
				selectedItem,
				infoPath,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
