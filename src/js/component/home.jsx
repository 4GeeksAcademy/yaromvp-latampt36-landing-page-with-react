import React from "react";

import { NavBar } from "./NavBar";
import { Body } from "./Body";
import { Footer } from "./Footer";

const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
