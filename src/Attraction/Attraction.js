import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';
import { getAttraction } from './state';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 700,
  },
  media: {
    height: 500,
  },
};

const mapStateToProps = state => ({
  attraction: state.attraction.data
});

const mapDispatchToProps = dispatch => ({
  getAttraction: (id) => dispatch(getAttraction(id))

});

class Attraction extends Component {

  componentWillMount() {
    const id = this.props.match.params.attractionId;
    this.props.getAttraction(id)
  }

  render() {
    const { attraction } = this.props;
    const { classes } = this.props;

    return(
      <div>
        <Card className={classes.card}>
          <img src={attraction.imgLink} 
            style={{width: '700px'}}
            alt={attraction.name}/>
          <CardContent>
            <Typography type="headline" component="h2">
              {attraction.name}
            </Typography>
            <Typography component="p">
              {attraction.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/attractions-list">
              <Button dense color="primary">
                Back to list
              </Button>
            </Link>
            <a href={attraction.link}>
              <Button dense color="primary">
                Go to attraction home page
              </Button>
            </a>
          </CardActions>
        </Card>                        
      </div>
    )
  }
}

Attraction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withStyles(styles)(Attraction)
);
