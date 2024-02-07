import React from "react";
import { Link } from 'react-router-dom';

function MovieList({movies}){
    const movieIds = Object.keys(movies);
    const renderMovies = movieIds.map((movieId)=>{
        return(
            <Link to={`/movies/${movieId}`} key={movieId}>{movies[movieId].title}</Link>
        )
    })
    return(
        <ul>
            {renderMovies}
         </ul>
    )
}

export default MovieList;