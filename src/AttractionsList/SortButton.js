import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Sort from 'material-ui-icons/Sort';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const SortButton = (props) => {

const { classes } = props;  
  return(
    <Button
      fab
      color="accent" 
      aria-label="sort" 
      className={classes.button}
      onClick={props.onSort}
    >
      <Sort />
    </Button>
  )
} 

SortButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortButton);