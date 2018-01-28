import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import List, {ListItem, ListItemIcon} from 'material-ui/List';
import FaMusic from 'react-icons/lib/fa/music';
import FaVideoCamera from 'react-icons/lib/fa/video-camera';
import FaBook from 'react-icons/lib/fa/book';
import {Link} from 'react-router-dom';

import Stats from '../Stats'
import {showAddAttraction, showNotification} from '../UI/logic';
import welcomeImg from '../assets/welcome.jpg';
import aa from '../assets/aa.jpg';
import loa from '../assets/loa.jpg';
import ad from '../assets/ad.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    maxWidth: '1000px'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: '#424242',
    fontSize: '15px',
    fontWeight: '300'
  },
  paper_link_box: {
    padding: 0,
    overflow: 'hidden'
  },
  welcomeImage: {
    width: '100%',
    margin: '-5px 0',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  infoHeadingH3: {
    textAlign: 'left',
    margin: '5px 0',
    textTransform: 'uppercase'
  },
  infoHeadingH4: {
    textAlign: 'left',
    margin: '5px 0 0 0'
  },
  infoText: {
    textAlign: 'left'
  },
  infoTextNoMargin: {
    margin: 0
  },
  infoList: {
    textAlign: 'left'
  },
  infoListItem: {
    padding: 0
  },
  infoListText: {
    fontSize: '15px',
    fontWeight: '300'
  },
  emptySpace20: {
    height: '20px'
  },
  infoIcon: {
    color: '#e32f33'
  },
});

const mapDispatchToProps = dispatch => {
  return {
    showSnackbar: (message) => dispatch(showNotification('Hello iSA :)')),
    showAddAttraction: () => dispatch(showAddAttraction())
  }
}

class Dashboard extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper_link_box}>
              <Link to="/attractions-list">
                <img className={classes.welcomeImage} src={welcomeImg} alt="Find attraction"/>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h3 className={classes.infoHeadingH3}>What is Yawn Killer?</h3>
              <p className={classes.infoText}>Arranging activities within free time is no longer a piece of cake. In
                the remote past, people willingly met outside to go for a walk or reached for a book when felt like
                staying at home... In this day and age, however, permanently in haste and information overwhelmed - we
                find it difficult to rest wisely.
                Yawn Killer offers you a plenty of ideas for how to relax alone, with friends or family.
              </p>
              <div className={classes.emptySpace20}></div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h4 className={classes.infoHeadingH4}>Among others, Yawn Killer prompts you:</h4>
              <List className={classes.infoList}>
                <ListItem className={classes.infoListItem}>
                  <ListItemIcon>
                    <FaMusic className={classes.infoIcon}/>
                  </ListItemIcon>
                  <p className={classes.infoListText}>Cultural events taking place in Lublin in the foreseeable
                    future</p>
                </ListItem>
                <ListItem className={classes.infoListItem}>
                  <ListItemIcon>
                    <FaVideoCamera className={classes.infoIcon}/>
                  </ListItemIcon>
                  <p className={classes.infoListText}>Cinema repertories, theatre & opera performances</p>
                </ListItem>
                <ListItem className={classes.infoListItem}>
                  <ListItemIcon>
                    <FaBook className={classes.infoIcon}/>
                  </ListItemIcon>
                  <p className={classes.infoListText}>Recommended e-books & films online free</p>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper_link_box}>
              <Link to="/attractions-list">
                <img className={classes.welcomeImage} src={loa} alt="list of attraction"/>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              onClick={this.props.showAddAttraction}
              className={classes.paper_link_box}>

                <img className={classes.welcomeImage} src={aa} alt="add attraction"/>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper_link_box}>
              <Link to="https://github.com/infoshareacademy/jfdzl1-red-coders-www">
                <img className={classes.welcomeImage} src={ad} alt="about dev team"/>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Stats/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
