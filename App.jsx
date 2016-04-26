import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

export class App extends React.Component {

	render() {
		return (
			<div>
				<div>
					<ul>
						<li><Link to="home">Home</Link></li>
						<li><Link to="about">About</Link></li>
						<li><Link to="contact">Contact</Link></li>
					</ul>	
					{this.props.children}
				</div>
			</div>
		);
	}
}

export class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home...</h1>
			</div>
		);
	}

}

export class About extends React.Component {
	render() {
		return (
			<div>
				<h1>About...</h1>
			</div>
		);
	}

}

export class Contact extends React.Component {
	render() {
		return (
			<div>
				<h1>Contact...</h1>
			</div>
		);
	}

}
