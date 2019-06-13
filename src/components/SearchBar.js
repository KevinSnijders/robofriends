import React from 'react';

const SearchBar = ({searchChange}) => {
	console.log("searchBar");
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				aria-label='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBar;