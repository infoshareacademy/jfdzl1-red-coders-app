import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormGroup, FormControlLabel  } from 'material-ui/Form';
import { auth } from '../firebase';
import PasswordField from './PasswordField';
import EmailField from './EmailField';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import StatusInfo from './StatusInfo';
import { connect } from 'react-redux';
import { hideSignInModal, showNotification } from '../UI/logic';

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
            agreement: false,
            passwordScore: 0,
            passwordValid: false,
            passwordSame: true,
            passWariants: {},
            infoText: 'If You wish to sign up please fill all fields',
        }
    }
    
    handleCheck = name => event => {      
        this.setState({ [name]: event.target.checked },
            this.setReadyToSend);        
    };
    
    handleSignUp = () => {
        if (this.state.isReadyToSend) {
        
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {            
                this.props.showNotification( "User succesfuly created");
                this.props.hideDialog()            
        })
        .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;        
        let infoText = '';
        console.log("Error: ", errorCode, errorMessage);
        switch(errorCode) {
            case 'auth/email-already-in-use':            
            infoText = 'This address has already been used to create a user';
            break;
            case 'auth/invalid-email':
            infoText = 'This e-mail adres is invalid';            
            break;                    
            case 'auth/operation-not-allowed': 
            infoText = 'Creating users is not allowed';            
            break; 
            case 'auth/weak-password': 
            infoText = 'This password is to weak';
            break;
            default:
            infoText = errorCode + ' - ' + errorMessage;            
                                      
        };
        this.setState({
            infoText: infoText,
        });

        });
        }
    }
    
    handlePasswordChange = (password) => {
        this.setState({
            password: password,
        },         
        this.scorePassword(password)
        );                     
    }

    handleRePasswordChange = (rePassword) => {        
        this.setState({
            rePassword: rePassword,
        }, this.setReadyToSend);
        
       
    }

    handleEmailChange = (email) => {        
        this.setState({
            email: email,
        },this.setReadyToSend);
               
    }

    passWariants = (password) => {
        return ({
                digits: /\d/.test(password),
                small: /[a-z]/.test(password),
                capital: /[A-Z]/.test(password),
                length: password.length > 5
            });
        }

        
            
        scorePassword = (password) => {            
            let score = 0;
            let passWariants = this.passWariants(password)
               
            for(var wariant in passWariants) {
                if(passWariants[wariant] === true) {
                    score++;
                }
            }
                   
            this.setState({
                passwordScore: score,
                passWariants: passWariants,
                passwordValid: (score >= 4),
            }, this.setReadyToSend); 
        }
            
        setReadyToSend = () => {
            console.log('zmiana ready: ',
                        'agreement: ' + this.state.agreement,
                        this.state.email,
                        this.state.password, 
                        this.state.rePassword,
                        'score: ' + this.state.passwordScore
                        );
            this.setState({
               // isReadyToSend: true,
                isReadyToSend: this.state.email !== ''
                && this.state.password !== '' 
                && this.state.agreement 
                && (this.state.password === this.state.rePassword)
                && this.state.passwordValid,
                passwordSame: (this.state.password === this.state.rePassword),
                
            }, this.setInfoTextIfIsReadyChange)
        }
    setInfoTextIfIsReadyChange = () => {
        this.setState({            
            infoText: this.state.isReadyToSend?'Ready to send':'Please fill all filds, agree with terms \nand use strong password',
        })

    }

    render() {

        const { classes } = this.props;

        return (
            <FormGroup>  
                <FormGroup row>
                    <EmailField 
                        name="email"
                        label="e-mail"
                        value={this.state.email}
                        onFieldChange={this.handleEmailChange}
                    />
                </FormGroup> 
                <FormGroup row>
                    <PasswordField 
                        name="password"
                        label="Password"
                        value={this.state.password}
                        onFieldChange={this.handlePasswordChange}
                        strength={this.state.passwordScore}
                        errorState = {!this.state.passwordSame}
                    />                        
                </FormGroup> 
                <FormGroup row> 
                    <PasswordField 
                        name="rePassword"
                        label="Retype password"
                        value={this.state.rePassword}
                        onFieldChange={this.handleRePasswordChange}
                        errorState = {!this.state.passwordSame}
                    />   
                </FormGroup> 
                <FormGroup row>
                    <StatusInfo statusText={this.state.infoText} />                                          
                </FormGroup>  
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox                            
                                checked={this.state.checked}
                                onChange={this.handleCheck('agreement')}
                                value="agreement"
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

const mapDispatchToProps = dispatch => {
    return {
      hideDialog:  () => dispatch(hideSignInModal()),
      showNotification: (message) => dispatch(showNotification(message))
    }
  };

export default connect(
    null,
    mapDispatchToProps

)(withStyles(styles)(AccountForm));
