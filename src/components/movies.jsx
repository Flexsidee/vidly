import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService'
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import {paginate} from '../utils/paginate';
import MoviesTable from './moviesTable';
import SearchBox from './common/searchBox';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        selectedGenre: null,
        searchQuery: '',
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
        this.setState({selectedGenre: genre, currentPage: 1, searchQuery: ''});
     };

     handleSearch = query =>{
      this.setState({searchQuery:query, selectedGenre: null, currentPage: 1});
     }

     handleSort = sortColumn =>{
        this.setState({sortColumn});
     };

     getPageData = () =>{
        const {pageSize, currentPage, selectedGenre, searchQuery, movies: allMovies,  sortColumn} = this.state;

        let filtered = allMovies;
        if(searchQuery) filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()) );
        else if(selectedGenre && selectedGenre._id) filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
      
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: movies};
     };

     renderTags(){
        const {length: count } = this.state.movies;
        const {pageSize, currentPage, genres, sortColumn} = this.state;
            
        if(count === 0) return  <p className='alert alert-info'>There are no movies in this database.</p>;

        const {totalCount, data: movies} = this.getPageData();

        return <div className='row'>
                    <div className="col-2">
                        <ListGroup items={genres}
                                    selectedItem= {this.state.selectedGenre} 
                                    onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <Link className="btn btn-primary mb-2" to='/movies/new'>New Movie</Link>
                        <p >Showing {totalCount} movies in the database.</p>
                        <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
                        <MoviesTable movies={movies} 
                                    sortColumn={sortColumn}
                                    onLike={this.handleLike} 
                                    onDelete={this.handleDelete}
                                    onSort={this.handleSort}
                        />
                        <Pagination itemsCount={totalCount}
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