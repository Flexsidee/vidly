import React, {Component} from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';

class MoviesTable extends Component {
    columns=[
        {path: 'title', label: 'Title' },
        {path: 'genre.name', label: 'Genre' },
        {path: 'numberInStock', label: 'Stock' },
        {path: 'dailyRentalRate', label: 'Rate' },
        {key: 'like'},
        {key: 'delete'}
    ];

    render() { 
        const {movies, onDelete, onLike, onSort, sortColumn} = this.props;
        return (  
            <table className='table'>
                <TableHeader 
                    columns={this.columns} 
                    onSort={onSort} 
                    sortColumn={sortColumn}
                />
                <tbody>
                    {movies.map(movie =>
                        <tr key={movie._id}> 
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like liked={movie.liked} onClick={()=>onLike(movie)} /></td>
                            <td><button className='btn btn-danger' onClick={()=> onDelete(movie)}>Delete</button></td>
                        </tr>)}
                </tbody>
            </table>
        );        
    }
}
 
export default MoviesTable;