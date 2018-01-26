import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import FilterBox from './FilterBox';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import SortButton from './SortButton';
import AttractionListElement from './AttractionListElement';

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
    return (
      <Paper>
        <Grid>
          <FilterBox changeFilter={this.setFilterText}/>
          <SortButton />
        </Grid>        
        <Grid>
          <List 
            align="left"
          >
            {this.props.attractions
              .filter(el => el.name.toUpperCase().search(this.state.fiterText.toUpperCase()) !== -1)
              .map(attraction => (                                
                  <AttractionListElement attraction={attraction} />                                   
              ))
            }
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
