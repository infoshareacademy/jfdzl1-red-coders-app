import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const SortButton = (props) => {

const { classes } = props;
  
  return(
    <Button fab mini color="accent" aria-label="sort" className={classes.button}>
        <AddIcon />
    </Button>
  )
} 

SortButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortButton);