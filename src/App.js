import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/movies';
import NotFound from './components/notFound';
import Customers from './components/customers';
import rentals from './components/rentals';

function App() {
  return (
    <main className='container'>
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found' />
      </Switch>
    </main>
  );
}

export default App;
