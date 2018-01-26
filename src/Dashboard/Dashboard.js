import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import FaDaschbord from 'react-icons/lib/fa/dashboard';

import Stats from './Stats'
import { showNotification } from '../UI/logic';
import welcomeImg from '../assets/welcome.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    maxWidth: '1300px'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow: 'hidden'
  },
  welcomeImage: {
    backgroundSize: 'cover',
    margin: '-20px'
  },
  infoText: {
    textAlign: 'left'
  },
  infoList: {
    textAlign: 'left'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    showSnackbar: (message) => dispatch(showNotification('Hello iSA :)'))
  }
}

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  <img className={classes.welcomeImage} src={welcomeImg} alt="Yawn Killer"/>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <p className={classes.infoText}>Arranging activities within free time is no longer a piece of cake. In the remote past, people willingly met outside to go for a walk or reached for a book when felt like staying at home... In this day and age, however, permanently in haste and information overwhelmed - we find it difficult to rest wisely.
                  Yawn Killer offers you a plenty of ideas for how to relax alone, with friends or family. Among others, Yawn Killer prompts you:
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <p className={classes.infoText}>Yawn Killer offers you a plenty of ideas for how to relax alone, with friends or family. Among others, Yawn Killer prompts you:</p>
                  <List className={classes.infoList}>
                    <ListItem>
                      <ListItemIcon>
                        <FaDaschbord/>
                      </ListItemIcon>
                      <ListItemText primary="Cultural events taking place in Lublin in the foreseeable future"/>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FaDaschbord/>
                      </ListItemIcon>
                      <ListItemText primary="Cinema repertories, theatre & opera performances"/>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FaDaschbord/>
                      </ListItemIcon>
                      <ListItemText primary="Recommended e-books & films online free"/>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  Lista wszystkich atrakcji
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  Dodaj atrakcję <button onClick={this.props.showSnackbar}>CLICK ME!</button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  Twórca aplikacji <Stats/>
                </Paper>
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
