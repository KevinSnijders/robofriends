import {CHANGE_SEARCH_FIELD, REQUESTS_ROBOTS_PENDING, REQUESTS_ROBOTS_SUCCESS, REQUESTS_ROBOTS_FAIL} from './constants';
import {apiCall} from './api/api';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const requestRobots = () => (dispatch) => {
	dispatch({
		type: REQUESTS_ROBOTS_PENDING
	});
	apiCall('https://jsonplaceholder.typicode.com/users')
		.then(data => dispatch({type: REQUESTS_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({type: REQUESTS_ROBOTS_FAIL, payload: error}))
};