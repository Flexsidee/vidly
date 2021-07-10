import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import Customers from './components/customers';
import Rentals from './components/rentals';
import Navbar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/react-toastify.css';
import './App.css';


class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
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
