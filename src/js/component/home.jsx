import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import propTypes from "prop-types";

//create your first component


const NavBar = () => {
	const navItemStyle = {
		color: "white",
	}
	return (
		<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
			<div className="container">
				<a className="navbar-brand" style={navItemStyle} href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end text-end" id="navbarNav">
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

const Card = (props) => {
	const cardStyle = {
		height: "100%",
	}
	return (
		<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
			<div className="card text-center p-0" style={cardStyle}>
				<img src={props.imageUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
				</div>
			</div>
		</div>
	)
};

Card.propTypes = {
	title: propTypes.string,
	imageUrl: propTypes.string,
	description: propTypes.string,
	buttonUrl: propTypes.string,
	buttonLabel: propTypes.string,
};

const Body = () => {
	return (
		<div className="container p-0">
			<Jumbotron />
			<div class="row">
				<Card
					title="Card Title 1"
					imageUrl="https://picsum.photos/500/325"
					description="Text 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend ullamcorper quam."
					buttonUrl="#"
					buttonLabel="Find out more!"
				/>
				<Card
					title="Card Title 2"
					imageUrl="https://picsum.photos/500/325?random"
					description="Text 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin diam congue, tempus magna in, auctor turpis. Duis."
					buttonUrl="#"
					buttonLabel="Find out more!"
				/>
				<Card
					title="Card Title 3"
					imageUrl="https://picsum.photos/500/325?grayscale"
					description="Text 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus egestas velit."
					buttonUrl="#"
					buttonLabel="Find out more!"
				/>
				<Card
					title="Card Title 4"
					imageUrl="https://picsum.photos/500/325?blur"
					description="Text 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper mauris pulvinar ante rutrum efficitur. Donec viverra tempus."
					buttonUrl="#"
					buttonLabel="Find out more!"
				/>
			</div>
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
