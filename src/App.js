import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import Customers from './components/customers';
import rentals from './components/rentals';
import Navbar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';


class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movieForm/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;
