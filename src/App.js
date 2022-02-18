// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Showcase from "./components/Pages/Showcase";
import Showcase2 from "./components/Pages/Showcase2";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import Products from "./components/Pages/Products";
import ContactUs from "./components/Pages/ContactUs";
import { useContext } from "react";
import Context from "./context/Context";
import Coffeeinfo from "./components/Pages/Coffeeinfo";

function App() {
	const { infoPath } = useContext(Context);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header page="home" />
							<Showcase />
							<Showcase2 />
							<Footer />
						</>
					}
				></Route>

				<Route
					path="/about"
					element={
						<>
							<Header page="about" />
							<About />
							<Footer />
						</>
					}
				/>

				<Route
					path="/product"
					element={
						<>
							<Header page="product" />
							<Products />
							<Footer />
						</>
					}
				/>

				<Route
					path="/contactUs"
					element={
						<>
							<Header page="contactUs" hide="contactus" small="small" />
							<ContactUs />
							<Footer />
						</>
					}
				/>
				<Route
					path={`${infoPath}`}
					element={
						<>
							<Header hide="contactus" small="small" />
							<Coffeeinfo pagename={`${infoPath}`} />
							<Footer />
						</>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
