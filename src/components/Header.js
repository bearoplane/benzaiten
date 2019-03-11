import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  logo: {
    fontFamily: "'Kaushan Script', cursive",
    fontWeight: "700",
    color: "#ffffff",
    margin: "0 3vmin 0 1vmin",
  },
  grow: {
    flexGrow: 1
  },
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(215, 0, 0, 0.85)",
    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.4)",
  }
};

/**
 * The Header component which has some links and the app logo.
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Header extends Component {
  render() {
    const { classes, counts, selectAll, selectNone } = this.props;

    return (
      <AppBar position="fixed" color="default" className={classes.root}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.logo}>
            BENZAITEN
          </Typography>
          {counts.total ? (
            <>
              <Typography className={classes.grow}>{` | ${counts.selected} / ${counts.total} Selected`}</Typography>
              <Button
                onClick={selectAll}
                disabled={counts.selected === counts.total}
                variant="outlined"
              >Select All</Button>
              <Button
                onClick={selectNone}
                disabled={counts.selected === 0}
                variant="outlined"
              >Select None</Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  counts: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
