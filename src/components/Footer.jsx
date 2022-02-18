import React from "react";
import Logo from "./shared/Logo";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
	return (
		<div className="footer-bg">
			<div className="container">
				<div className="footer-content">
					<div className="logo">
						<Logo place="footer" />
					</div>
					<div className="about">
						<ul>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/">Blog</Link>
							</li>
							<li>
								<Link to="/">Privacy Policy</Link>
							</li>
							<li>
								<Link to="/contactUs">Contact Us</Link>
							</li>
							<li>
								<Link to="/">FAQ</Link>
							</li>
						</ul>
					</div>
					<div className="subscribe">
						<form>
							<label htmlFor="email">Subscribe Now</label>
							<input type="email" placeholder="email address" />
							<button className="btn btn-secondary">Subscribe</button>
						</form>
					</div>
					<div className="social-links">
						<a href="https://instagram.com">
							<FaInstagram />
						</a>
						<a href="https://twitter.com">
							<FaTwitter />
						</a>
						<a href="https://facebook.com">
							<FaFacebook />
						</a>
					</div>
				</div>
				<div className="copy-right">
					<p>
						Created By Ahmet Karaduman | Copyright &copy; 2022; All Rights
						Reserved
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
