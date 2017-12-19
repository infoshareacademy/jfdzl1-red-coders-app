import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    block: {
        maxWidth: 250,
    },   
});

class PasswordField extends Component {
constructor(props) {
    super(props);        
    this.state = {       
        showPassword: false,
    }
}

handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
};

handleMouseDownPassword = event => {
        event.preventDefault();
};

handleChange = (e) => {
    this.props.onFieldChange(e.target.value);
}

render() {
    const { classes } = this.props;

    return(
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor={this.props.name}>{this.props.label}</InputLabel>
    <Input
        id={this.props.name}                                                                
        type={this.state.showPassword ? 'text' : 'password'}
        value={this.props.value}
        onChange={this.handleChange}
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    onClick={this.handleClickShowPasssword}
                    onMouseDown={this.handleMouseDownPassword}
                    color="primary"
                >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
    />
    </FormControl>
    )
}
}

PasswordField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasswordField);