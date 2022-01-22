import "./index.scss";

import Card from "../Card";
import React from "react";
import { clones } from "../../data";

const Clones = () => {
	return (
		<div className="clones">
			{clones.map((clone, index) => {
				return <Card key={index} clone={clone} />;
			})}
		</div>
	);
};

export default Clones;
