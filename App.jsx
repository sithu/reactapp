import React from 'react';

class App extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>{this.props.headerProp}</h1>
				<h2>{this.props.contentProp}</h2>
			</div>
		);
	}
}

App.defaultProps = {
		"headerProp": "Default Header",
		"contentProp": "Default Content"
}

export default App;