import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

import Uploader from './Uploader';
import Chooser from './Chooser';
import Generator from './Generator';

import { withStyles } from '@material-ui/core/styles';

import './Main.css';

const styles = theme => ({
  shim: {
    ...theme.mixins.toolbar,
  }
});

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
  state = {
    generatorOpen: false
  }

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

  toggleOpenGenerator = () => {
    const { generatorOpen } = this.state;

    this.setState({
      generatorOpen: !generatorOpen
    });
  }

  render() {
    const { store, classes } = this.props;
    const { generatorOpen } = this.state;

    const books = store.getBooks();
    const selectedBooks = store.getSelectedBooks();

    return (
      <>
        <Header
          counts={{ selected: selectedBooks.length, total: books.length }}
          selectAll={this.selectAll}
          selectNone={this.selectNone}
          openGenerator={this.toggleOpenGenerator}
        />
        <div className={classes.shim} />
        {
          books.length === 0 ?
          <Uploader updateBooks={this.updateBooks} /> :
          <React.Fragment>
            <Chooser toggleChecked={this.toggleChecked} books={books} />
            <Generator open={generatorOpen} handleClose={this.toggleOpenGenerator} books={selectedBooks} />
          </React.Fragment>
        }
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
