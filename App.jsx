import React from 'react';

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			"header": "Header",
			"content": "Content"
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.header}</h1>
				<h2>{this.state.content}</h2>
			</div>
		);
	}
}

export default App;