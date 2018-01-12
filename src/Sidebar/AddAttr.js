/**
 * Created by maciej on 12.01.18.
 */
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormHelperText, FormControl } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        flexGrow: 1
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2
    }
});

class AddAttr extends Component {
    state = {
        category: '',
        name: '',
        description: '',
        link: ''
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

    render(){
        const { classes } = this.props;
        return(
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="categoryHelper">Category</InputLabel>
                        <Select value={this.state.category}
                                onChange={this.handleCategoryChange}
                                input={<Input name="category" id="category-helper"/>}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="film">Film</MenuItem>
                            <MenuItem value="book">Book</MenuItem>
                            <MenuItem value="entertainment">Entertainment</MenuItem>
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
                        multiline="true"
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
            </Grid>
        )
    }

}
AddAttr.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddAttr);
