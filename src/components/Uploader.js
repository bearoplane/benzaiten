import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import { smartSplit } from '../utils';

const styles = theme => ({
  dropzone: {
    padding: theme.spacing.unit * 2,
    width: "80%",
    margin: `${theme.spacing.unit * 2}px auto ${theme.spacing.unit * 8}px`,
    borderRadius: "1vmin",
    border: "1px dashed rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    }
  },
  instructions: {
    width: '60%',
    margin: 'auto',
    padding: theme.spacing.unit * 2
  },
  instructionsList: {
    fontSize: '1rem',
    padding: `${theme.spacing.unit}px 0`
  }
})

/**
 * The Uploader component which accepts a .csv file
 *
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Uploader extends Component {
  /**
   * onDrop is called by <Dropzone> when a file is uploaded.
   * It's main function is to read the file into memory.
   */
  onDrop = (acceptedFiles, rejectedFiles) => {
    const { updateBooks } = this.props;

    if (acceptedFiles.length !== 1) {
      // @todo do error message
      console.log('Must be exactly one file.');
      return;
    }

    let droppedFile = acceptedFiles[0];

    if (droppedFile.type !== 'text/csv') {
      console.log('Must be CSV file.');
      return;
    }

    // (a) instantiate the FileReader, (b) define its events, (c) read in the file
    const reader = new FileReader();
    reader.onload = () => {
      // @todo: error check to make sure it is a csv, and it has multiple lines and whatever
      const file = reader.result;

      // We assume here that the first line in the file is the headings
      let lines = file.split('\n');
      const headings = lines.shift().split(',');

      /**
       * This is a fun one...
       * The point is to map an actual object onto the array of string values,
       *  where each string represents one comma-delimited line.
       * To do this I split the line and reduce. I know that each Nth entity
       *  corresponds with the Nth heading (cause it was an Excel doc before),
       *  so I use `headings` as property names and the comma-delimited values
       *  from the line as the values.
       */
      const books = lines.map(line => smartSplit(line).reduce((ret, val, i) => ({ ...ret, [headings[i]]: val }), {}))

      updateBooks(books);
    }
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');

    reader.readAsText(droppedFile);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Uploader">
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                className={classNames(classes.dropzone, {'dropzone--isActive': isDragActive})}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Drop file <strong>here</strong>, or click to select from your computer.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        <Paper elevation={3} className={classes.instructions}>
          <Typography variant="h2" component="h2">Instructions</Typography>
          <Typography className={classes.instructionsList}>* The source document must be in csv (comma-separated value) format. If it is an Excel file, export it from Excel as a csv.</Typography>
          <Typography className={classes.instructionsList}>1. Drag and drop the csv book list into Benzaiten. You may also click to select a file from the computer.</Typography>
          <Typography className={classes.instructionsList}>2. Select the publications that you would like to appear in the resultant email.</Typography>
          <Typography className={classes.instructionsList}>3. Click on [Generate Email].</Typography>
          <Typography className={classes.instructionsList}>4. Click on [Copy to Clipboard].</Typography>
          <Typography className={classes.instructionsList}>5. Paste in the email client of your choice.</Typography>
          <Typography className={classes.instructionsList}>** To start over, simply refresh the page.</Typography>
        </Paper>
      </div>
    );
  }
}

Uploader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Uploader);
