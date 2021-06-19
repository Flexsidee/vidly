import React, { Component } from 'react';

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
                    <div className="form-group">
                        <label htmlFor="username" id="username" autoFocus>Username</label>
                        <input 
                            value={account.username} 
                            onChange={this.handleChange}
                            name='username'
                            id='username' 
                            className="form-control" 
                            type="text" 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" id="password">Password</label>
                        <input 
                            onChange={this.handleChange}
                            value={account.password}
                            name='password'
                            id='password' 
                            className="form-control" 
                            type="text" 
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;