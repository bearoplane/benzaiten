import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main';

import BookStore from './BookStore.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main store={BookStore} />
      </div>
    );
  }
}

export default App;
