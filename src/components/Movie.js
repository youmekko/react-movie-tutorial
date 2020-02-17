import React from 'react';

const Movie = ({ movie }) => {
    const post = 
        movie.Poster = "N/A" ? DEFAULT_PLACEHODLER_IMAGE : movie.Poster
    return (
        <div className="movie">
            <h1>{movie.title}</h1>
            <div>
                <img 
                    width="200"
                    alt={`the movie titled: ${movie.Title}`}
                    src={poster}
                />            
            </div>
            <p>{movie.Year}</p>
        </div>
    );
};

export default Movie;