import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui-icons/Info';
import Clear from 'material-ui-icons/Clear';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import FilterBox from './FilterBox';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import attractions from "../state/attractions";

const styles = theme => ({
    root: {
      width: '100%',    
      background: theme.palette.background.paper,
    },
  });



class AttractionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {

            fiterText: '',
        };
    }


    setFilterText = (fiterText) => {
        this.setState({fiterText: fiterText})
    };  

    render() {
        const { classes } = this.props;

        return(
            <Paper>
            <Grid xs={12}>
            <FilterBox changeFilter={this.setFilterText}/>
            </Grid>
            <Grid xs={12}>
        <List align="left">
          {this.props.attractions
            .filter(el => el.name.toUpperCase().search(this.state.fiterText.toUpperCase()) !== -1)               
            .map(attraction => (
            <ListItem
              key={attraction.id}
              dense
              button
              onDoubleClick={null}
              className={classes.listItem}
            >              
            <ListItemText primary={attraction.name}
            style={{fontSize: 20}} />
                <Typography 
                gutterBottom
                align="left"
                style={{fontSize: 10, color: 'blue' }}
                >{attraction.description}</Typography>              
              <ListItemSecondaryAction>
              <Info 
                color= "primary"/>            
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Paper>
    );

    }

}



AttractionsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    attractions: state.attractions.attractions
})

export default connect(
    mapStateToProps
)(
    withStyles(
        styles
    )(AttractionsList)
)
