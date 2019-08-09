import React from 'react';
import './Card.scss'

const Card = ({name, website, id}) => {
	return (
		<div className='card grow'>
			<img alt='robots' src={`https://robohash.org/${id}?size=150x150`}/>
			<div className="card__info">
				<h2>{name}</h2>
				<p>{website}</p>
			</div>
		</div>
	);
};

export default Card;
