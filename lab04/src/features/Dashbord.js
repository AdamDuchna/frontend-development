import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { useState } from "react";
import { deleteMovieAction } from '../actions/MovieActions';

const MovieList = ({ movies, deleteMovieAction},props) => {
    const sortedMovies = movies.sort((a, b) => (a.productionYear < b.productionYear) ? 1 : -1).slice(0, 3)
    return (
        <div>
            {sortedMovies.map(movie => ( <div className="movie" key={movie.id}> 
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: "black" }}>{movie.title} </Link>
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