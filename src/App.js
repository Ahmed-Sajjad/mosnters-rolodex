import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      users: [
        { id: 1, name: 'Ahmed' },
        { id: 2, name: 'Sajjad' }, 
        { id: 3, name: 'Qwertty' }, 
        { id: 4, name: 'HGfds' }, 
        { id: 5, name: 'Midfgds' }
      ]
    };
  }

  render() {
    return (
      <div className='App'>
        <CardList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
