import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({movies}){
    const params = useParams();
    
    return(
        <div>
            <h1>{movies[params.movieId].title}</h1>
        </div>
    )
}

export default MovieShow;