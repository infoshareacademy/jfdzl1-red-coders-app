import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
});

const AttractionListElement = (props) => {
  const { classes } = props;
  return (   
    <Link to={`/attraction/${props.attraction.id}`}
    key={props.attraction.id}
    >
      <ListItem
        key={props.attraction.id}
        dense
        button
        className={classes.listItem}
      >
        <ListItemText
          primary={props.attraction.name}
          secondary={props.attraction.description}
          style={{fontSize: 20}}
        />
        <ListItemSecondaryAction>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Link>
  )
}

AttractionListElement.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(AttractionListElement);