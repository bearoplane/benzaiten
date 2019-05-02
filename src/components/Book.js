import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import Icon from '../icons';


/**
 * A little utility component for displaying the books.
 * Basically just a template.
 *
 */
 // <Icon name={book.material_format}  />
class Book extends Component {
  render() {
    let { book, handleToggle, display } = this.props;

    return (
      <ListItem>
        <ListItemAvatar width="100px">
          <img src={require('../icons/Book.png')} />
        </ListItemAvatar>
        <ListItemText primary={book.title} secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              {book.author_name}
            </Typography>
            {book.item_call_number} {book.item_enumeration_and_chronology}
          </React.Fragment>
        } />
        { !display &&
          <ListItemSecondaryAction>
            <Checkbox
              checked={!!book.selected}
              tabIndex={-1}
              onChange={handleToggle}
              disableRipple
            />
          </ListItemSecondaryAction>
        }
      </ListItem>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleToggle: PropTypes.func,
  display: PropTypes.bool
}

export default Book;
