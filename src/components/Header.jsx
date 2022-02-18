import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import Searchbar from "./Searchbar";
import ShoppingCart from "./ShoppingCart";
import Context from "../context/Context";
import { Link } from "react-router-dom";
import Logo from "../components/shared/Logo";
import ListOfSelectedItems from "./ListOfSelectedItems";
import { useContext } from "react/cjs/react.development";

function Header(props) {
	return (
		<div className={`navbar ${props.hide}`}>
			<div className="navbar-info">
				<div className="container">
					<div className="navbar-info-container">
						<div className="contact">
							<div className="icon">
								<FaLocationArrow />
							</div>
							<p>Main Street No: 12 New York</p>
							<div className="icon">
								<FaPhone />
							</div>
							<p>(555)-555-55 55</p>
							<div className="icon">
								<FaEnvelope />
							</div>
							<p>testmail@mail.co</p>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar-navigation">
				<div className="container">
					<div className="navbar-navigation-container">
						<div className="navbar-logo">
							<Logo place="nav" small={`${props.small}`} />
						</div>
						<ul className={props.page}>
							<li>
								<Link to="/">Home</Link>
								<div className="underline"></div>
							</li>
							<li>
								<Link to="/about">About</Link>
								<div className="underline"></div>
							</li>
							<li>
								<Link to="/product">Products</Link>
								<div className="underline"></div>
							</li>
							<li>
								<Link to="/contactUs">Contact</Link>
								<div className="underline"></div>
							</li>
						</ul>
						<div className="icons">
							<Searchbar />
							<ShoppingCart />
						</div>
					</div>
				</div>
				<div className="shopping-screen">
					<ListOfSelectedItems />
				</div>
				<div className="input">
					<input type="text" placeholder="Search..." />
				</div>
			</div>
		</div>
	);
}

export default Header;
