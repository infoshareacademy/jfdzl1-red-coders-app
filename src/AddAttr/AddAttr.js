/**
 * Created by maciej on 12.01.18.
 */
import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Select from 'material-ui/Select';
import PropTypes from 'prop-types'
import Input, {InputLabel} from 'material-ui/Input';
import {FormHelperText, FormControl} from 'material-ui/Form';
import {MenuItem} from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import {database} from '../firebase.js';
import firebase from 'firebase';
import {showNotification, hideAddAttraction} from '../UI/logic';
import {connect} from 'react-redux';

const styles = theme => ({
  container: {
    flexGrow: 1
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

const mapDispatchToProps = dispatch => {
  return {
    showSnackbar: message => dispatch(showNotification(message)),
    hideDialog: () => dispatch(hideAddAttraction())
  }
}

class AddAttr extends Component {
  state = {
    category: '',
    name: '',
    description: '',
    link: '',
    imgLink: ''
  };

  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleLinkChange = e => {
    this.setState({
      link: e.target.value
    });
  };

  handleImgLinkChange = e => {
    this.setState({
      imgLink: e.target.value
    });
  };

  dataValid = () => {
    return this.state.name !== '' && this.state.category !== ''
  };

  clearForm = () => {
    this.setState({
      category: '',
      name: '',
      description: '',
      link: '',
      imgLink: ''
    }
  )
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.dataValid()) {
      database.ref('/attractions').push({
        name: this.state.name,
        category: this.state.category,
        description: this.state.description,
        link: this.state.link,
        imgLink: this.state.imgLink,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      })
        .then(() => {
            this.props.showSnackbar('Attraction saved');
            this.clearForm();
            this.props.hideDialog();
          }
        )
        .catch(
          () => this.props.showSnackbar('Somethning wrong!!!')
        )
    }

    else {
      this.props.showSnackbar('Please fill name and chose category')
    }
  }
  ;

  render() {
    const {classes} = this.props;

    return (
      <Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="categoryHelper">Category</InputLabel>
            <Select value={this.state.category}
                    onChange={this.handleCategoryChange}
                    input={<Input name="category" id="category-helper"/>}
            >
              <MenuItem key="1" value=""><em>None</em></MenuItem>
              <MenuItem key="2" value="place">Place</MenuItem>
              <MenuItem key="3" value="film">Film</MenuItem>
              <MenuItem key="4" value="book">Book</MenuItem>
              <MenuItem key="5" value="entertainment">Entertainment</MenuItem>
            </Select>
            <FormHelperText>Choose category</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleNameChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            label="Description"
            className={classes.textField}
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            margin="normal"
            multiline={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="link"
            label="Link"
            className={classes.textField}
            value={this.state.link}
            onChange={this.handleLinkChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="imgLink"
            label="Image link"
            className={classes.textField}
            value={this.state.imgLink}
            onChange={this.handleImgLinkChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <button onClick={this.handleSubmit}>Submit</button>
        </Grid>
      </Grid>
    )
  }

}

AddAttr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(AddAttr));
