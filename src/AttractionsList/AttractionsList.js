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
import { toggleSort } from '../state/attractions';


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
          <SortButton onSort={this.props.toggleSort}/>
        </Grid>        
        <Grid>
          <List 
            align="left"
          >
            {this.props.attractions
              .filter(el => el.name.toUpperCase().search(this.state.fiterText.toUpperCase()) !== -1)              
              .sort((a, b) => this.props.sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
              .map(attraction => (                                
                  <AttractionListElement 
                    key={attraction.id}
                    attraction={attraction}
                  />                                   
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
  attractions: state.attractions.attractions,
  sortAsc: state.attractions.sortAttraction.asc
})

const mapDispatchToProps = (dispatch) => ({
  toggleSort: () => dispatch(toggleSort())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withStyles(
      styles
  )(AttractionsList)
)
