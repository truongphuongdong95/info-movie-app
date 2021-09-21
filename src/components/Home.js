import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from './spinner';
import MoviesContainer from './MoviesContainer';

function Home(props) {
    const loading = props.loading;
    return (
        <div className="container">
            <SearchForm />
            {loading ? <Spinner /> : <MoviesContainer/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.movies.loading
    }
}

export default connect(mapStateToProps)(Home)
