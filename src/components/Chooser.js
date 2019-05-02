import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

import Book from './Book';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: "#fff",
    margin: "2vmin",
  },
});

/**
 * The Chooser component accepts an array of books and allows a user to choose
 *  the ones to appear on the Book List.
 *
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Chooser extends Component {
  render() {
    const { classes, books, toggleChecked } = this.props;

    return (
      <Paper className={classes.root}>
        <List>
          { books.map((book, i) => <Book key={i} book={book} handleToggle={toggleChecked(book.id)} />) }
        </List>
      </Paper>
    );
  }
}

Chooser.propTypes = {
  classes: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  toggleChecked: PropTypes.func.isRequired,
}

export default withStyles(styles)(Chooser);
