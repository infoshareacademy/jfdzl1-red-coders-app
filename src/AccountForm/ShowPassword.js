import React, { Component } from 'react';
 import zxcvbn from 'zxcvbn';
// import './index.css';

//var zxcvbn = require('zxcvbn');

class ShowPassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'input',
            score: 0,
        }
        this.showHide = this.showHide.bind(this);
        this.passwordStrength = this.passwordStrength.bind(this);
    }

    showHide(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input'
        })
    }

    passwordStrength(event){
        if(event.target.value === ''){
            this.setState({
                score: 0
            })
        }
        else{
            var pw = zxcvbn(event.target.value);
            this.setState({
                score: pw.score
            });
        }

    }

    render(){
        return(
            <div>
                <div>
                <input type={this.state.type} 
                    className="password__input" 
                    onChange={this.passwordStrength}
                    placeholder='password'/>
                <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                </div>
                <div>
                <span className="password__strength" >{this.state.score}</span>
                </div>
            </div>
        )
    }
}

export default ShowPassword;