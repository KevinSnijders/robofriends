import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			term: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState({robots: users})
			});
	};

	onSearchChange = (event) => {
		this.setState({term: event.target.value})
	};

	render() {
		const {robots, term} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(term.toLowerCase());
		});
		return !robots.length ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBar searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	};
}

export default App;