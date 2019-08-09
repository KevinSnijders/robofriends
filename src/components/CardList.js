import React from 'react';
import Card from './Card';
import './CardList.scss';

const CardList = ({robots}) => {
	return <div className="cardlist">
		{(robots.length > 0) ?
			(
				<>
					<h1 className="cardlist__title">List of robots:</h1>
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
				<h1>No robots found</h1>
				<i className="material-icons cardlist__search">
					search
				</i>
			</div>
		}
	</div>
};

export default CardList;