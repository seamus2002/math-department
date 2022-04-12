import React from 'react';
import PartTime from '../pages/subpages/PartTime';

const FullTimeCard = (props: any) => {
	const TagName = props.key;
  	return (
		<div>
			<div className="card mx-auto">
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{props.position}</h6>
					<h6 className="card-subtitle mb-2">Interests: {props.interests}</h6>
					<button type="button" className="btn btn-primary">Learn More</button>
				</div>
			</div>
		</div>

  	);
}

export default FullTimeCard;
