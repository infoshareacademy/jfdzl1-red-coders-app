import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import { LinearProgress } from 'material-ui/Progress';

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

strengthProgres = () => {
    let strenght = this.props.strength * 25;
    let colorBar = null ;
    switch (this.props.strength) {
        case 1: colorBar = "accent";
        break;
        case 2: colorBar = "accent";
        break;
        case 3: colorBar = "accent";
        break;
        case 4: colorBar = "primary";
        break;
        default: colorBar = "accent";

    }
    return (
        strenght > 0?<LinearProgress
                    mode="determinate"
                    value={strenght}
                    color={colorBar}
                    />:null
    )
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
        error={this.props.errorState}
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    onClick={this.handleClickShowPasssword}
                    onMouseDown={this.handleMouseDownPassword}
                    color={this.props.errorState?"accent":"primary"}
                >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
    />
   {this.strengthProgres()}
    </FormControl>
    )
}
}

PasswordField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasswordField);
