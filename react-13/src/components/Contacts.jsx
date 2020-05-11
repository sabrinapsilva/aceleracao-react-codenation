import React from "react";
import Container from './Container';

class Contacts extends React.Component {
	render() {
		return (
			<Container data-testid="contacts">
				<section className="contacts">
					{this.props.children}
				</section>
			</Container>
		);
	}
}

export default Contacts;
