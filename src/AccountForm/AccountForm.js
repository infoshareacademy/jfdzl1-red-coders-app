import React, {Component} from 'react';
import ShowPassword from "./ShowPassword";


class AccountForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            password: '',
            repassword: '',

        }
    }



    handleSubmit(event) {

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type="email"
                                   placeholder='e-mail'
                            />
                        </div>
                        <div>
                        <ShowPassword/>
                        </div>
                        <div>
                            <input type="password"
                                   placeholder='retype password'
                            />
                            
                        </div>
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

export default AccountForm;