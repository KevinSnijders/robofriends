import React from 'react';
import Card from './Card';
import './CardList.scss';

const CardList = ({robots}) => {
	console.log(robots);
	return (robots.length > 0) ?
		 (
			<>
				{
					robots.map((user, i) => {
						return (
							<Card
								key={i}
								id={robots[i].id}
								name={robots[i].name}
								website={robots[i].website}
							/>
						);
					})
				}
			</>
		)
		: <div>No result</div>
};

export default CardList;