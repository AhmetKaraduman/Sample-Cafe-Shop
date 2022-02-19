import React from "react";
import { useContext } from "react";
import Context from "../../context/Context";
// import Button from "./shared/Button";

function Showcase() {
	const { hideInfo } = useContext(Context);

	return (
		<div className="showcase-container" onWheel={hideInfo}>
			<div className="bgcontainer">
				<div className="container">
					<div className="showcase">
						<div className="showcase-info">
							<h2>PLEASURE FROM THE BEST COFFEE</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
								esse explicabo soluta similique inventore, nam nulla debitis et
								eveniet ex.
							</p>
							<Link to="/product">
								<button className="btn btn-secondary">Get It Now</button>
							</Link>
						</div>
						<div className="showcase-void"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Showcase;
