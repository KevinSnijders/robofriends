import * as actions from './actions';
import {CHANGE_SEARCH_FIELD, REQUESTS_ROBOTS_PENDING, REQUESTS_ROBOTS_SUCCESS, REQUESTS_ROBOTS_FAIL} from './constants';
 import configureMockStore from 'redux-mock-store';
 import thunkMiddleware from 'redux-thunk';

 const mockStore = configureMockStore([thunkMiddleware]);

describe('search', () => {
	it('should create an action to search robots', () => {
		const text = "robot";
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text
		};
		expect(actions.setSearchField(text)).toEqual(expectedAction)
	})
});

describe('requestRobots', () => {
	it('handles requesting robots api', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();
		const expectedAction = {
			type: REQUESTS_ROBOTS_PENDING
		};
		expect(action[0]).toEqual(expectedAction)
	})
});