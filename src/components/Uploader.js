import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import classNames from 'classnames';
import { smartSplit } from '../utils';

import './Uploader.css';

class BookList extends Component {
  render() {
    let { books } = this.props;

    return books.map((book, i) => (
      <div key={i}>
        <h3>{book.title}</h3>
        <h4>{book.author_name}</h4>
        <hr />
      </div>
    ))
  }
}

/**
 * The Uploader component which accepts a .csv file
 *
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Uploader extends Component {
  state = {
    books: []
  }

  /**
   * onDrop is called by <Dropzone> when a file is uploaded.
   * It's main function is to read the file into memory.
   */
  onDrop = (acceptedFiles, rejectedFiles) => {
    // @todo: error handling for rejectedFiles and what not
    console.log('accepted', acceptedFiles);
    console.log('rejected', rejectedFiles);

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

      this.setState({ books });

      console.log(books);
    }
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');

    reader.readAsText(acceptedFiles[0])
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Uploader;
