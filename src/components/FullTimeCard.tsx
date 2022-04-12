import React from 'react';

const FullTimeCard = (props: any) => {
  	return (
		<div>
			<div className="card mx-auto">
				<div className="card-body">
					<svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
					{/* <img src="..." className="card-img-top" alt="..." /> */}
					<h5 className="card-title">{props.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{props.position}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-book" /> {props.degree}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-person-heart" /> {props.interests}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-map" /> {props.office}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-envelope" /> {props.email}</h6>
					<h6 className="card-subtitle mb-2"><i className="bi bi-telephone" /> {props.tel}</h6>
				</div>
			</div>
		</div>

  	);
}

export default FullTimeCard;
