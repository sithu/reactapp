import React from 'react';

class App extends React.Component {

	render() {
		return (
			<div>
				<h3>Array: {this.props.propArray}</h3>
				<h3>Bool: {this.props.propBool} ? "True" : "False"</h3>
				<h3>Func: {this.props.propFunc (3)}</h3>
				<h3>Object: {this.props.ObjectName}</h3>
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