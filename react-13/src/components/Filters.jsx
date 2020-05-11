import React from 'react';
import Container from './Container';
import Input from './Input';
import Button from './Button';

class Filters extends React.Component {
	render() {
		return (
			<Container data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<Input className="filters__search__input" placeholder="Pesquisar" />
						<Button className="filters__search__icon">
							<i className="fa fa-search" />
						</Button>
					</div>

					<Button className="filters__item is-selected">
						Nome <i className="fas fa-sort-down" />
					</Button>

					<Button className="filters__item">
						País <i className="fas fa-sort-down" />
					</Button>

					<Button className="filters__item">
						Empresa <i className="fas fa-sort-down" />
					</Button>

					<Button className="filters__item">
						Departamento <i className="fas fa-sort-down" />
					</Button>

					<Button className="filters__item">
						Data de admissão <i className="fas fa-sort-down" />
					</Button>
				</section>
			</Container>
		);
	}
}

export default Filters;
