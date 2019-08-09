import React from 'react';
import './SearchBar.scss';

const SearchBar = ({searchChange}) => {
	return (
		<div className='search'>
			<input
				className='search__input'
				type='search'
				aria-label='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
			<span className="search__icon">
				<i className="material-icons">
					search
				</i>
			</span>
		</div>
	);
};

export default SearchBar;