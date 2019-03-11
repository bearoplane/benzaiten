import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

import Icon from '../icons';

import classNames from 'classnames';

// import './Main.css';

/*
<ListItemAvatar>

</ListItemAvatar>
*/

/**
 * A little utility component for displaying the books.
 * Basically just a template.
 *
 */
class Book extends Component {
  render() {
    let { book, handleToggle } = this.props;

    return (
      <ListItem>
        <ListItemAvatar width="100px" height="100px" >
          <Icon name={book.material_format}  />
        </ListItemAvatar>
        <ListItemText primary={book.title} secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              {book.author_name}
            </Typography>
            {book.item_call_number} {book.item_enumeration_and_chronology}
          </React.Fragment>
        } />
        <ListItemSecondaryAction>
          <Checkbox
            checked={book.selected}
            tabIndex={-1}
            onChange={handleToggle}
            disableRipple
          />
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

/*
item_barcode,institution_symbol,item_holding_location,item_permanent_shelving_location,item_temporary_shelving_location,item_type,item_call_number,
item_enumeration_and_chronology,author_name,title,lhr_item_materials_specified,material_format,oclc_number,title_isbn,publication_date,lhr_item_cost,
lhr_item_nonpublic_note,lhr_item_public_note,item_status_current_status,item_due_date,item_issued_count,issued_count_ytd,item_soft_issued_count,item_soft_issued_count_ytd,
item_last_issued_date,item_last_inventoried_date,item_deleted_date,lhr_date_entered_on_file,lhr_item_acquired_date,
language_code,branch,class_scheme,shelving_key,active,created,updated,sort_order

39970000509884,UNBCA,LAWA,LAW-STACKS: Main Collections,,VOLUME,KF819 .M32 2018,
,"MacDougall, Bruce,",Mistake in contracting /,,Book,1030966659,0433473037^9780433473039,2018,168.00 CAD,
,,AVAILABLE,,0,0,0,0,
,,,11/1/2018,11/1/2018,
eng,LAW,LC,KF 000819 .M32 2018,1,11/12/2018 16:13,11/25/2018 22:51,785875

item_permanent_shelving_location (LAW-GOV: Government Documents (3rd Floor))
item_type (VOLUME)
material_format (Book)
item_call_number (KF123 .A123)
item_enumeration_and_chronology ((year) 2007/2008)
author_name (MacDougall, Bruce,)
publication_date (2018)
language_code (eng)
*/

Book.propTypes = {
  book: PropTypes.object.isRequired,
  checked: PropTypes.bool
}

/**
 * The Chooser component accepts an array of books and allows a user to choose
 *  the ones to appear on the Book List.
 *
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Chooser extends Component {
  render() {
    const { books, toggleChecked } = this.props;

    return (
      <List className="Chooser">
        { books.map((book, i) => <Book key={i} book={book} handleToggle={toggleChecked(book.id)} />) }
      </List>
    );
  }
}

export default Chooser;
