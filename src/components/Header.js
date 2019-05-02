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
  },
  selectButton: {
    margin: "0 1vmin",
  },
  white: {
    color: "#fff",
  }
};

/**
 * The Header component which has some links and the app logo.
 * @version 0.0.1
 * @author [Matt Poirier](https://github.com/bearoplane)
 */
class Header extends Component {
  render() {
    const { classes, counts, selectAll, selectNone, openGenerator } = this.props;

    return (
      <AppBar position="fixed" color="default" className={classes.root}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.logo}>
            BENZAITEN
          </Typography>
          {counts.total ? (
            <>
              <Typography
                className={classes.white}
              >{`[ ${counts.selected} / ${counts.total} Selected ]`}</Typography>
              <Button
                classes={{
                  root: classes.selectButton,
                  label: classes.white
                }}
                size="small"
                onClick={selectAll}
                disabled={counts.selected === counts.total}

              >Select All</Button>
              <Button
                classes={{
                  root: classes.selectButton,
                  label: classes.white
                }}
                size="small"
                onClick={selectNone}
                disabled={counts.selected === 0}
              >Select None</Button>
              <Typography className={classes.grow}>{' '}</Typography>
              <Button
                onClick={openGenerator}
              >
                Generate Email
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  counts: PropTypes.object.isRequired,
  selectAll: PropTypes.func.isRequired,
  selectNone: PropTypes.func.isRequired,
  openGenerator: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
