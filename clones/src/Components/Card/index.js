import "./index.scss";

import React from "react";

const Card = ({ clone }) => {
	const { name, githubLink, technologies, websiteLink, description, image } =
		clone;
	return (
		<div className="card">
			<a
				href={websiteLink ? websiteLink : githubLink}
				className="imagelink"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={image} alt="" />
			</a>

			<div className="details">
				<h3>{name}</h3>
				<p>{description}</p>
				<div className="technologies">
					<h4>Technologies used:</h4>
					<div className="technology">
						{technologies.map((technology, index) => {
							return (
								<p className="badge" key={index}>
									{technology}
								</p>
							);
						})}
					</div>
				</div>
				<div className="buttons">
					{websiteLink ? (
						<a
							href={websiteLink}
							className="button"
							target="_blank"
							rel="noopener noreferrer"
						>
							Website Link
						</a>
					) : (
						""
					)}

					<a
						href={githubLink}
						className="button"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github Link
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
