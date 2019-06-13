import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './MainPage.css';



class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	};

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		});
	};
	render() {
		const {onSearchChange, isPending} = this.props;

		return isPending ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<SearchBar searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={this.filterRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	};
}

export default MainPage;