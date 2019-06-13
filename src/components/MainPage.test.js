import {shallow} from 'enzyme';
import React from 'react';
import App from '../containers/App';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	};
	wrapper = shallow(<MainPage {...mockProps}/>)
});
it('render MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
});

it('render with pending true', () => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	};
	expect(mockProps.isPending).toEqual(false)
});

it('filter robots correctly', () => {
	expect(wrapper.instance().filterRobots([])).toEqual([]);

	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John'
		}],
		searchField: 'j',
		isPending: false
	};
	const wrapper2 = shallow(<MainPage {...mockProps2} />);
	expect(wrapper2.instance().filterRobots(mockProps2)).toEqual([{
		id: 3,
		name: 'John'
	}]);
});

it('filter robots correctly 2', () => {
	expect(wrapper.instance().filterRobots([])).toEqual([]);

	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John'
		}],
		searchField: 'a',
		isPending: false
	};
	const filteredRobots = [];
	const wrapper3 = shallow(<MainPage {...mockProps3} />);
	expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});