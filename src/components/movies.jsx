import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService'
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import {paginate} from '../utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {path: 'title', order:'asc'}
     }

     componentDidMount(){
        const genres = [{_id: '', name: 'All Genres'},...getGenres()];
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

     handleSort = sortColumn =>{
        this.setState({sortColumn});
     };

     renderTags(){
        const {length: count } = this.state.movies;
        const {pageSize, currentPage, selectedGenre, movies: allMovies, genres, sortColumn} = this.state;
       
        if(count === 0) return  <p className='alert alert-info'>There are no movies in this database.</p>;

        const filtered =selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return <div className='row'>
                    <div className="col-2">
                        <ListGroup items={genres}
                                    selectedItem= {this.state.selectedGenre} 
                                    onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    
                    <div className="col">
                        <p className='alert alert-info'>Showing {filtered.length} movies in the database.</p>
                        <MoviesTable movies={movies} 
                                    sortColumn={sortColumn}
                                    onLike={this.handleLike} 
                                    onDelete={this.handleDelete}
                                    onSort={this.handleSort}
                        />
                        <Pagination itemsCount={filtered.length}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={this.handlePageChange} 
                        />
                    </div>
                </div>;
     }
  
    render() { 
        return  <React.Fragment>{this.renderTags()}</React.Fragment>;
    }
}
 
export default Movies;