import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './components/Main';

import BookStore from './BookStore.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Main store={BookStore} />
      </div>
    );
  }
}

export default App;
