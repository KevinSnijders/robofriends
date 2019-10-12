import React from 'react';
import Card from './Card';
import './CardList.scss';

const CardList = ({robots}) => {
	return <div className="cardlist">
		{(robots.length > 0) ?
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
			: <div className="cardlist--empty">
				<i className="material-icons cardlist__search">
					search
				</i>
				<h2>No results found</h2>
			</div>
		}
	</div>
};

export default CardList;