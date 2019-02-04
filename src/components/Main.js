import React, { Component } from 'react';
import Uploader from './Uploader';

import classNames from 'classnames';

import './Main.css';

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
  render() {
    return (
      <div className="Main">
        <Uploader />
      </div>
    );
  }
}

export default Main;
