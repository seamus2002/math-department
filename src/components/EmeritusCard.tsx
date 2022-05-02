import React from 'react';

const EmeritusCard = (props: any) => {
  	return (
		<div>
			<div className="card mx-auto">
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{props.position}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-book" /> {props.degree}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-person-heart" /> {props.interests}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-envelope" /> {props.email}</h6>
				</div>
			</div>
		</div>
  	);
}

export default EmeritusCard;
