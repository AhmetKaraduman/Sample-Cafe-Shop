import React from "react";
import { FaSearch } from "react-icons/fa";
import Context from "../context/Context";
import { useContext } from "react";

function Searchbar() {
	const { showInputArea } = useContext(Context);

	return (
		<div className="search-bar-icon" onClick={showInputArea}>
			<FaSearch id="FaSearchBar" />
		</div>
	);
}

export default Searchbar;
