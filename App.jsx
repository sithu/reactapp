import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { data: 0 }
		this.setNewNumber = this.setNewNumber.bind(this);
	}

	setNewNumber() {
		this.setState({ data: this.state.data + 1});
	}
	
	render() {
		return (
			<div>
				<button onClick= {this.setNewNumber}>Increment</button>
				<Content myNumber = {this.state.data}></Content>
			</div>
		);
	}
}

class Content extends React.Component {
	// this will execute before render
	componentWillMount() {
		console.log("Component will mount")
	}

	render() {
		console.log("render")
	}

	componentDidMount() {
		console.log("Component did mount")
	}

	componentWillReceiveProps(newProps) {
		console.log("Will receive prorps")
	}

	shouldComponentUpdate(newProps, newState) {
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("Will update...");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("Did Update...");
	}
	
	componentWillUnmount() {
		console.log("Will Unmount...");
	}

	render() {
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		);
	}
}

export default App;