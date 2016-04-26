import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor() {
		super();
		this.state = { data: [] }
		this.setStateHandler = this.myStateHandler.bind(this)
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
		this.getDomNodeHandler = this.findDomNodeHandler.bind(this)
	}

	findDomNodeHandler() {
		var myDiv = document.getElementById('myDiv')
		React.findDOMNode("myDiv").style.color = 'green'
	}

	forceUpdateHandler() {
		this.forceUpdate()
		this.setState({ data: []})
	}

	myStateHandler() {
		var item = "setState..."
		var myArray = this.state.data
		myArray.push(item)
		this.setState({data: myArray})
	}

	render() {
		return (
			<div>
				<button onClick={this.forceUpdateHandler}>FORCE</button>
				<button onClick={this.setStateHandler}>SET STATE</button>
				<h4>State Array: {this.state.data}</h4>
				<h4>Random Num: {Math.random()}</h4>
				<button onClick={this.findDomNodeHandler}>Find Me</button>
				<div id="myDiv">NODE</div>
			</div>
		);
	}
}

App.propTypes = {
	propArray:React.PropTypes.array.isRequired,
	propBool:React.PropTypes.bool.isRequired,
	propFunc:React.PropTypes.func,
	propObject:React.PropTypes.object
}

App.defaultProps = {
	propArray: [1,2,3,4],
	propBool:false,
	propFunc: function(e) { return e },
	propObject: { ObjectName: "Object Name" }
}

export default App;