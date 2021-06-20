import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state={
        account: {
            username: '',
            password: ''
        },
        errors: {}
    }

    validate = () =>{
        const errors = {}
        const {account} =this.state;
        
        if(account.username.trim() === '') 
            errors.username = 'Username is required';
        if(account.password.trim() === '') 
            errors.password = 'Password is required';

        return (Object.keys(errors).length === 0 ) ? null : errors;
    }
    
    handleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate();

        this.setState({errors: errors || {} });
        if(errors) return null;
        console.log('submitted');
    }

    handleChange = ({currentTarget: input}) =>{
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render() {
        const {account, errors} = this.state;

        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label='Username'
                        name='username'
                        value={account.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input 
                        label='Password'
                        name='password'
                        value={account.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;