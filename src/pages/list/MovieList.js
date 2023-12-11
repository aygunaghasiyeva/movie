import React from 'react';
import { useSelector} from 'react-redux';
import './MovieList.css';

const MovieList = () => {
    const addedMovies = useSelector(state => state.list);
    const addedMoviesArray = [...addedMovies.movies];

    return (
        <div className='movie-container'>
            

            <div className='movie-list movies'>

                {addedMoviesArray.length === 0 ? <h2>Film siyahısı boşdur.</h2> : addedMoviesArray.map(movie => {
                    return (
                        <div className='movie-item' key={movie.movie.imdbID}>
                            <div className="movie-item-info">
                                <div className="first-block">
                                    <h2>{movie.movie.Title}({movie.movie.Year})</h2>
                                </div>

                                <div className='bottom-group'>
                                    <a className='link' rel='noreferrer' target='_blank' href={`https://www.imdb.com/title/${movie.movie.imdbID}/`}>Ətraflı öyrən</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default MovieList;