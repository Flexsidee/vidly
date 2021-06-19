import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state={
        account: {
            username: '',
            password: ''
        }
    }

    handleSubmit = e =>{
        e.preventDefault();

        console.log('submitted');
    }

    handleChange = ({currentTarget: input}) =>{
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render() {
        const {account} = this.state;

        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label='Username'
                        name='username'
                        value={account.username}
                        onChange={this.handleChange}
                    />
                    <Input 
                        label='Password'
                        name='password'
                        value={account.password}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;