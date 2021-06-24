import React, { Component } from 'react';
import Form from './common/form'
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends Form {
    state={
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }


    doSubmit = () =>{
        //call the server
        console.log('submitted');
    }

    render() {
        const {data, errors} = this.state;

        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label='Username'
                        name='username'
                        value={data.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input 
                        label='Password'
                        name='password'
                        value={data.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button disabled={this.validate()} className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;