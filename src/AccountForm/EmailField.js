import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Email from 'material-ui-icons/Email';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

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

class EmailField extends Component {


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
            required
            type="email"
            value={this.props.value}
            onChange={this.handleChange}
            endAdornment={
                <InputAdornment position="end">                                
                    <IconButton                                                                     
                        disabled                  
                    >  
                    <Email 
                    color="primary"/>
                    </IconButton>                                   
                </InputAdornment>
            }
        />
    </FormControl>
    )
}
}

EmailField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailField);