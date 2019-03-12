import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';

const styles = {
  text: {
    color: '#000'
  }
}

/**
 * The Generator component is actually just a dialog that displays the email.
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Generator extends Component {
  render() {
    const { classes, books, open, handleClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
      >
        <DialogContent>
          <DialogContentText
            className={classes.text}
          >
            {books.reduce((output, book) => {
              return output + `<span>${book.title}</span>`
            }, '')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Copy to Clipboard</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

Generator.propTypes = {
  classes: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Generator);
