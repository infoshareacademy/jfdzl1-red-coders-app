import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormGroup, FormControlLabel  } from 'material-ui/Form';
import { auth } from 'firebase';
import Typography from 'material-ui/Typography';
import PasswordField from './PasswordField';
import EmailField from './EmailField';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';

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
    formGroup: {
        color: 'red',
    }
});
class AccountForm extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            email:'',
            password: '',
            rePassword: '',
            isReadyToSend: false,           
            agree: false,
        }
    }
    
    // handleChange = prop => event => {
    //     this.setState({ [prop]: event.target.value });
    //     this.setReadyToSend();
    // };

    handleCheck = name => event => {
        this.setState({ [name]: event.target.checked });
        this.setReadyToSend();
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
        console.log("Error: ", errorCode, errorMessage)
        });
        } else {            

        }      
    }
    
    handlePasswordChange = (password) => {
        this.setState({
            password: password,
        });
        this.setReadyToSend();
    }

    handleRePasswordChange = (rePassword) => {
        this.setState({
            rePassword: rePassword,
        });
        this.setReadyToSend();
    }

    handleEmailChange = (email) => {
        this.setState({
            email: email,
        });
        this.setReadyToSend();
    }

    render() {

        const { classes } = this.props;

        return (
            <FormGroup>  
                <FormGroup row>
                    <EmailField 
                        name="emailNew"
                        label="e-mail new"
                        value={this.state.email}
                        onFieldChange={this.handleEmailChange}
                    />
                </FormGroup> 
                <FormGroup row>
                    <PasswordField 
                        name="passwordNew"
                        label="Password new"
                        value={this.state.password}
                        onFieldChange={this.handlePasswordChange}
                    />                        
                </FormGroup> 
                <FormGroup row> 
                    <PasswordField 
                        name="rePasswordNew"
                        label="Retype password new"
                        value={this.state.rePassword}
                        onFieldChange={this.handleRePasswordChange}
                    />   
                </FormGroup> 
                <FormGroup row>
                    <Typography component="p">
                        {this.state.isReadyToSend?'Ready to send':'If You wish to sign up please fill all fields'}
                    </Typography>                        
                </FormGroup>  
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox                            
                                checked={this.state.checked}
                                onChange={this.handleCheck('agree')}
                                value="agree"
                            />
                          }
                        label={"I agree wih terms"}
                    />                        
                    <Button 
                        disabled={!this.state.isReadyToSend}
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
