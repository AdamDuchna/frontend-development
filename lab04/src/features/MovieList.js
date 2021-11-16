import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { useState } from "react";
import { deleteMovieAction } from '../actions/MovieActions';

const MovieList = ({ movies, deleteMovieAction},props) => {
    console.log(movies)
    return (
        <div className="movies">
            {movies.map(movie => ( <div className="movie" key={movie.id}> 
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: "white" }}>{movie.title}</Link>
                <button onClick={() => deleteMovieAction(movie)}>Usuń</button>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
}

const mapDispatchToProps = {
    deleteMovieAction,
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);