import React from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard';

function MoviesContainer(props) {
    const movies = props.movies;
    let content ='';
    content = movies.Response ==="True" ? movies.Search.map((movie,index) => 
        <MovieCard key={index} movie={movie}/>
    ) : null;
    return (
        <div className='row mt-3'>
            {content}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps)(MoviesContainer)
