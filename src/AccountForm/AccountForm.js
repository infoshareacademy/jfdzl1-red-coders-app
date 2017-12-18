import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormGroup, FormControlLabel  } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Email from 'material-ui-icons/Email';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import { auth } from 'firebase';

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
    checkbox: {
        marginBottom: 16,
        margin: theme.spacing.unit,
        
    },
});

class AccountForm extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            email:'',
            password: '',
            rePassword: '',
            isReadyToSend: false,
            showPassword: false,
            showRePassword: false,
            checked: false,
        }
    }
    
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        this.setReadyToSend();
    };

    handleCheck = name => event => {
        this.setState({ [name]: event.target.checked });
        this.setReadyToSend();
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleClickShowRePasssword = () => {
        this.setState({ showRePassword: !this.state.showRePassword });
    }; 

    setReadyToSend = () => {
        this.setState({
            isReadyToSend: (this.state.password !== '') && !this.state.checked && (this.state.password === this.state.rePassword),
            //  && this.password === this.rePassword && this.checked,
        })
    }

    handleSignUp = () => {
       if (this.state.isReadyToSend) {
        auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage)
        });
        } else {
            

        }
      
    }
    

    render() {

        const { classes } = this.props;

        return (
            <FormGroup>  
                    <FormGroup row>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="email">e-mail</InputLabel>
                        <Input
                            id="email"
                            required
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
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
                    </FormGroup> 
                        <FormGroup row>
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
                                            color="primary"
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        </FormGroup> 
                        <FormGroup row>                       
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="rePassword">Retype password</InputLabel>                       
                        <Input
                            id="rePassword"                                                        
                            type={this.state.showRePassword ? 'text' : 'password'}
                            value={this.state.rePassword}
                            onChange={this.handleChange('rePassword')} 
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={this.handleClickShowRePasssword}
                                        onMouseDown={this.handleMouseDownPassword}
                                        color="primary"
                                    >
                                        {this.state.showRePassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }                           
                        />                       
                        </FormControl>
                        </FormGroup> 
                        <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox                            
                              checked={this.state.checked}
                              onChange={this.handleCheck('checked')}
                              value="checked"
                            />
                          }
                          label="I agree"
                        />
                        
                        <Button 
                        className={classes.button}
                        raised 
                        color="primary"
                        onClick={this.handleSignUp}>                        
                        <Done className={classes.leftIcon} />
                        Sign up
                        </Button>
                    </FormGroup>
                    
                </FormGroup>
            
        )
    }
}


AccountForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountForm);

