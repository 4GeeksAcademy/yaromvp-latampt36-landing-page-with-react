import React from "react";

import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";

export const Body = () => {
	return (
		<div className="container p-0">
			<Jumbotron />
			<Cards />
		</div>
	)
};
