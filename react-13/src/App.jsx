import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import './App.scss';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
    }
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(res => res.json())
      .then(data => this.setState({ contacts: data }))
  }

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <Topbar />

        <Filters />

        <Contacts>
          <Contact
            name="Nome"
            phone="Telefone"
            country="País"
            admission="Admissão"
            company="Empresa"
            department="Departamento"
          />
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              avatar={contact.avatar}
              name={contact.name}
              phone={contact.phone}
              country={contact.country}
              admission={new Date(contact.admissionDate).toLocaleDateString()}
              company={contact.company}
              department={contact.department}
            />
          ))}
        </Contacts>
      </React.Fragment>
    )
  }
}

export default App;
