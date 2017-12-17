import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
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
});

class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            rePasword: '',
            showPassword: false,
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {

        const { classes } = this.props;


        return (
            <div>
                <form>
                    <div>
                        <div>
                            <input type="email"
                                   placeholder='e-mail'
                            />
                        </div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={this.handleClickShowPasssword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="rePassword">Retype password</InputLabel>
                            <Input
                                id="rePassword"
                                type={this.state.showPassword ? 'text' : 'rePassword'}
                                value={this.state.rePasword}
                                onChange={this.handleChange('rePassword')}

                            />
                        </FormControl>
                        <div>

                            <input type='submit'
                                   value='Add'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


AccountForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountForm);

