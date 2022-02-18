import React from "react";
import { useContext } from "react";
import Context from "../../context/Context";

function Showcase2() {
	const { panelAnimations, hideInfo } = useContext(Context);

	return (
		<div className="showcase2" onClick={panelAnimations} onWheel={hideInfo}>
			<div className="showcase2-head container">
				<h1>Enjoy Our Place</h1>
				<div className="line"></div>
			</div>
			<div className="panel-container" id="panel-container">
				<div className="panel" id="panel-1">
					<div className="panel-innerhead" id="h3panel1">
						<h4>Meet Our Special Team</h4>
						<p>Our experienced team is there for you</p>
					</div>
				</div>
				<div className="panel" id="panel-2">
					<div className="panel-innerhead" id="h3panel2">
						<h4>Visit Our Caffee Shop</h4>
						<p>We are waiting for you in our cafe where you will enjoy</p>
					</div>
				</div>
				<div className="panel" id="panel-3">
					<div className="panel-innerhead" id="h3panel3">
						<h4>Taste The Best Product</h4>
						<p>With the best brewing techniques...</p>
					</div>
				</div>
				<div className="panel" id="panel-4">
					<div className="panel-innerhead" id="h3panel4">
						<h4>...and your Coffee is waiting for you</h4>
						<p>Enjoy your coffee</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Showcase2;
