import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui-icons/Info';
import Clear from 'material-ui-icons/Clear';
import { database } from '../firebase';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import FilterBox from './FilterBox';
import Paper from 'material-ui/Paper';

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
            attractions: [],
            fiterText: '',
        };
    }

      componentDidMount() {
        database.ref('/attractions')
            .on('value', (snapshot) => {
                let items = snapshot.val();
                let newState = [];
                for (let item in items) {
                  newState.push({
                    id: item,
                    category: items[item].category,
                    description: items[item].description,
                    link: items[item].link,
                    name: items[item].name,
                    timeStamp: items[item].timeStamp,
                  });
                }
                this.setState({
                    attractions: newState,
            });
            })
    };

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
          {this.state.attractions
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

export default withStyles(styles)(AttractionsList);