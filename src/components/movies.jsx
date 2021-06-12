import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService'
import Like from './common/like.jsx';
import Pagination from './common/pagination.jsx';
import ListGroup from './common/listGroup';
import {paginate} from '../utils/paginate.js';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
     }

     componentDidMount(){
        const genres = [{name: 'All Genres'},...getGenres()];
        this.setState({movies: getMovies(), genres});
     };

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

     handleGenreSelect = genre =>{
        this.setState({selectedGenre: genre, currentPage: 1});
     };

     renderTags(){
        const {length: count } = this.state.movies;
        const {pageSize, currentPage, selectedGenre, movies: allMovies, genres} = this.state;
       
        if(count === 0) return  <p className='alert alert-info'>There are no movies in this database.</p>;

        const filtered =selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const movies = paginate(filtered, currentPage, pageSize);

        return <div className='row'>
                    <div className="col-2">
                        <ListGroup items={genres}
                                    selectedItem= {this.state.selectedGenre} 
                                    onItemSelect={this.handleGenreSelect}/>
                    </div>
                    
                    <div className="col">
                        <p className='alert alert-info'>Showing {filtered.length} movies in the database.</p>
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
                        <Pagination itemsCount={filtered.length}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={this.handlePageChange} />
                    </div>
                </div>;
     }
  
    render() { 
        return  <React.Fragment>{this.renderTags()}</React.Fragment>;
    }
}
 
export default Movies;