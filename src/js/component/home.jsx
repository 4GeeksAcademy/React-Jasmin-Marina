import React from "react";
import Cards from "./cardsMarina"
import Footer from "./footerMarina"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
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
