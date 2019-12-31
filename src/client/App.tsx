import * as React from 'react';
import telemetry from '../server/db/telemetry';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = { telemetry: [] };
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/telemetry');
			let telemetry = await r.json();
			this.setState({ telemetry });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="covalence-blue">My Blog</h1>
				<ul className="list-group">
					{this.state.telemetry.map(telemetry =>{
					return <li className="list-group-item">{telemetry.temperature}</li>
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	telemetry: Array<{date:string,temperature:string}>;
}

export default App;
