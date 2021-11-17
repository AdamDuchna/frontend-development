import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { useState } from "react";
import { deleteMovieAction } from '../actions/MovieActions';

const MovieList = ({ movies,actors, deleteMovieAction},props) => {
    const newestMovies = movies.sort((a, b) => (a.productionYear < b.productionYear) ? 1 : -1).slice(0, 3)
    const mostActorsMovies = movies.sort((a, b) => (a.actors.length < b.actors.length) ? 1 : -1).slice(0, 3)
    const mostActingActors = actors.sort((a, b) => (a.movies.length < b.movies.length) ? 1 : -1).slice(0, 3)
    return (
        <div className="lists">
            <div> Newest
            {newestMovies.map(movie => ( <div className="movie" key={movie.id}> 
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: "white" }}>{movie.title} </Link>
                </div>))}
            </div>
            <div>Most Actors in a Movie 
            {mostActorsMovies.map(movie => ( <div className="movie" key={movie.id}> 
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: "white" }}>{movie.title} </Link>
                </div>))}
            </div>
            <div>Actors that acted in most movies  
            {mostActingActors.map(actor => ( <div className="actor" key={actor.id}> 
            <Link to={`/actors/${actor.id}`} style={{ textDecoration: 'none', color: "white" }}>{actor.name+" "+actor.surname} </Link>
                </div>))}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        actors: state.actors
    };
}

const mapDispatchToProps = {
    deleteMovieAction,
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);