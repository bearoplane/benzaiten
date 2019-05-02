import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';

import Book from './Book';

/**
 * The Generator component is actually just a dialog that displays the email.
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Generator extends Component {
  constructor(props) {
    super(props);

    this.output = React.createRef();
  }

  copyToClipboard = () => {
    let selection = window.getSelection();
    let range = document.createRange();

    // Select the text
    range.selectNode(this.output.current);
    selection.addRange(range);

    // Copy the selection to the clipboard
    document.execCommand('copy');

    // Empty the selection
    selection.empty();
  }

  render() {
    const { classes, books, open, handleClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        maxWidth="lg"
        fullWidth={true}
      >
        <DialogContent>
          <DialogContentText>
            <div ref={this.output}>
              <span>{ /* spacer */ }</span>
              { books.map((book, i) => <Book key={i} book={book} display={true} />) }
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.copyToClipboard}>Copy to Clipboard</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

Generator.propTypes = {
  books: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Generator;
