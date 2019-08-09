import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import ErrorBoundry from '../components/ErrorBoundry';
import './MainPage.scss';

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	};

	filterRobots = () => {
		console.log(this.props);
		let {robots, searchField} = this.props;
		return robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
	};

	render() {
		const {onSearchChange, isPending} = this.props;
		return isPending ?
			<h1>Loading</h1> :
			(
				<div className='main'>
					<div className="header">
						<h1 className="header__title">Robo<span className="header__title--highlight">Friends</span></h1>
						<SearchBar searchChange={onSearchChange}/>
					</div>
					<div className="content">
						<ErrorBoundry>
							<CardList robots={this.filterRobots()}/>
						</ErrorBoundry>
					</div>
				</div>
			);
	};
}

export default MainPage;