import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from '../common/like.jsx';

class Movies extends Component {
    state = { 
        movies: getMovies(),
     }

     handleDelete = movie => {
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({ movies});
     };

     handleLike= (movie)=>{
         const movies = [...this.state.movies];
         const index= movies.indexOf(movie); 
         movies[index]={...movies[index]};
         movies[index].liked = !movies[index].liked;
         this.setState({movies});
     }

     renderTags(){
        const {length: count } = this.state.movies;
        if(count === 0) return  <p className='alert alert-info'>There are no movies in this database.</p>;

        return <React.Fragment>
                <p className='alert alert-info'>Showing {count} movies in the database.</p>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie =>
                            <tr key={movie._id}> 
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)} /></td>
                                <td><button className='btn btn-danger' onClick={()=> this.handleDelete(movie)}>Delete</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </React.Fragment>;
     }

    render() { 
        return  <React.Fragment>{this.renderTags()}</React.Fragment>;
    }
}
 
export default Movies;