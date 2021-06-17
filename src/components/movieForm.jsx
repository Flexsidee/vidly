import React from 'react';

const MovieForm = ({match, history}) => {
    return ( 
        <div>       
            <h1>Movie From {match.params.id}</h1>
            <button className="btn btn-secondary" onClick={()=> history.push('/')}>Save</button>
        </div> 

    );
}

export default MovieForm;