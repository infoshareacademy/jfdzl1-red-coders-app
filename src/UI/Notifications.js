import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { withStyles } from 'material-ui/styles';

import { hideNotification } from './logic';

function mapStateToProps(state) {
  return {
    open: state.ui.notifications.open,
    message: state.ui.notifications.message,
    autoHideDuration: 3000
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClose: () => dispatch(hideNotification())
  };
}

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class Notifications extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={this.props.autoHideDuration}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.props.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Notifications));
