import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like.jsx';
import Pagination from './common/pagination.jsx';
import {paginate} from '../utils/paginate.js';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4
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
     };

     handlePageChange = page =>{
        this.setState({currentPage: page});
     };

     renderTags(){
        const {length: count } = this.state.movies;
        const {pageSize, currentPage, movies: allMovies} = this.state;
       
        if(count === 0) return  <p className='alert alert-info'>There are no movies in this database.</p>;

        const movies = paginate(allMovies, currentPage, pageSize);

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
                        {movies.map(movie =>
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
                <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
            </React.Fragment>;
     }
  
    render() { 
        return  <React.Fragment>{this.renderTags()}</React.Fragment>;
    }
}
 
export default Movies;