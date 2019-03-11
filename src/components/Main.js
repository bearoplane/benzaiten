import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Uploader from './Uploader';
import Chooser from './Chooser';

import Header from './Header';

import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import './Main.css';

const styles = {

};

/**
 * The Main component which handles the main workflow.
 * That is:
 *  - Uploader
 *  - Chooser
 *  - Outputter
 *
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Main extends Component {
  updateBooks = (books) => {
    const { store } = this.props;

    store.addBooks(books);

    this.forceUpdate();
  }

  toggleChecked = id => () => {
    const { store } = this.props;

    // Toggle it in the store
    store.toggleSelectBook(id);

    // Then we have to force an update
    // A bit hacky, sure, but it works fine!
    this.forceUpdate();
  }

  selectAll = () => {
    const { store } = this.props;

    store.selectAllBooks();

    this.forceUpdate();
  }

  selectNone = () => {
    const { store } = this.props;

    store.deselectAllBooks();

    this.forceUpdate();
  }

  render() {
    const { store } = this.props;

    const books = store.getBooks();

    return (
      <div className="Main">
        <Header
          counts={{ selected: store.getSelectedBooks().length, total: books.length }}
          selectAll={this.selectAll}
          selectNone={this.selectNone}
        />
        {
          books.length === 0 ?
          <Uploader updateBooks={this.updateBooks} /> :
          <Chooser toggleChecked={this.toggleChecked} books={books} />
        }
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
