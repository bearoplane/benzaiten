import React, { Component } from 'react';

import classNames from 'classnames';

// import './Main.css';

/**
 * The Chooser component accepts an array of books and allows a user to choose
 *  the ones to appear on the Book List.
 *
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Chooser extends Component {
  render() {
    return (
      <div className="Main">
        <Uploader />
      </div>
    );
  }
}

export default Chooser;
