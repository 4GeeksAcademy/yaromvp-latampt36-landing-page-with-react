import React from "react";

//include images into your bundle
import propTypes from "prop-types";

import { infoCards } from './data.js';

//create your first component

const NavBar = () => {
	const navItemStyle = {
		color: "white",
	}
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" style={navItemStyle} href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const Jumbotron = () => {
	const jumbotronStyle = {
		background: "#F5F5F5",
	}
	return (
		<div className="jumbotron bg-secondary-subtle px-3 pt-1 pb-5 mb-3" style={jumbotronStyle}>
			<h1 className="display-4"><b>A Warm Welcome!</b></h1>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptatem suscipit dolorum. Fuga nam
				facere obcaecati, necessitatibus ea impedit ullam mollitia harum aperiam repellat natus, nemo autem sunt
				exercitationem soluta.</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
		</div>
	)
};

//INTENTO DE HACER LA LISTA DE CARDS DE MANERA AUTOMÁTICA
const Cards = () => {
	const cardStyle = {
		height: "100%",
	}
	const listCards = infoCards.map(card =>
		<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
			<div className="card text-center p-0" style={cardStyle}>
				<img src={card.imgUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{card.title}</h5>
					<p className="card-text">{card.description}</p>
				</div>
				<div className="card-footer">
					<a href={card.buttonUrl} className="btn btn-primary">{card.buttonLabel}</a>
				</div>
			</div>
		</div>
	);
	return (<div class="row">{listCards}</div>)
};

const Body = () => {
	return (
		<div className="container p-0">
			<Jumbotron />
			<Cards />
		</div>
	)
};

const Footer = () => {
	return (
		<footer className="bg-body-tertiary text-center text-lg-start">
			<div className="text-center p-4 bg-dark text-light">
				Copyright © Your Website 2024
			</div>
		</footer>
	);
};

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
