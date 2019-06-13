import {CHANGE_SEARCH_FIELD, REQUESTS_ROBOTS_PENDING, REQUESTS_ROBOTS_SUCCESS, REQUESTS_ROBOTS_FAIL} from './constants';

import * as reducers from './reducers';


describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: ''
	};

	it('should return initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
	});

	it('should handle CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({searchField: 'abc'})
	})
});

describe('requestRobot', () => {
	const initialStateRobots = {
		isPending: false,
		robots: [],
		error: ''
	};

	it('should return initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
	});

	it('should handle REQUEST_ROBOTS_PENDING action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUESTS_ROBOTS_PENDING,
		})).toEqual({
			isPending: true,
			robots: [],
			error: ''
		})
	});

	it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUESTS_ROBOTS_SUCCESS,
			payload: [{
				id: 123,
				name: 'test',
				email: 'test@gmail.com'
			}]
		})).toEqual({
			isPending: false,
			robots: [{
				id: 123,
				name: 'test',
				email: 'test@gmail.com'
			}],
			error: ''
		})
	});

	it('should handle REQUEST_ROBOTS_FAIL action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUESTS_ROBOTS_FAIL,
			payload: 'error'
		})).toEqual({
			isPending: false,
			robots: [],
			error: 'error'
		})
	})
});