import React from 'react';
import { useDispatch } from 'react-redux';
import { addToList } from '../../redux/actions/listActions';

import './MovieItem.css';
const MovieItem = ({movie}) => {
    const dispatch = useDispatch();

    const handleAddMovie = (movie) => {
        dispatch(addToList(movie));
    }

    return (
        <div className='movie-card'>
            <div className='movie-card-image'>
                <img src={movie.Poster} alt='No poster' />
            </div>
            <div className="movie-text">
                <div className='movie-card-title'>
                    <h3>{movie.Title} ({movie.Year})</h3>
                </div>
                <button className='search-submit button' onClick={() => handleAddMovie({movie})}>Siyahıya əlavə et</button>
            </div>
        </div>
    );
}

export default MovieItem;