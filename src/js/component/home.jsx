import React from "react";
import Cards from "./cardsMarina"
import Footer from "./footerMarina"
import Navigation from "./navigation";
import Jumbotron from "./jumbotron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
		<Navigation />
		<Jumbotron />
		<div className="row row-cols-1 row-cols-md-4 g-6 p-5">
			<Cards />
			<Cards />
			<Cards />
			<Cards />
		</div>
			<Footer />
		</div>
	);
};

export default Home;
