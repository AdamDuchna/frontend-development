import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteMovieAction } from '../actions/MovieActions';
import { ClickerIncrementAction,ClickerDecrementAction} from '../actions/ClickerAction'

const MovieList = ({ movies,actors,clicker, ClickerIncrementAction,ClickerDecrementAction},props) => {
    const newestMovies = movies.sort((a, b) => (a.productionYear < b.productionYear) ? 1 : -1).slice(0, 3)
    const mostActorsMovies = movies.sort((a, b) => (a.actors.length < b.actors.length) ? 1 : -1).slice(0, 3)
    const mostActingActors = actors.sort((a, b) => (a.movies.length < b.movies.length) ? 1 : -1).slice(0, 3)
    useEffect(() => {
        setTimeout(()=>{ClickerDecrementAction()},1000)
    }, clicker)
    return (
        <div className="lists">
            <div className="timer">
                <div>{clicker}</div>
                <div onClick={ClickerIncrementAction}>+1</div>
                <div onClick={ClickerDecrementAction}>Start Timer</div>
            </div>
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
        actors: state.actors,
        clicker: state.clicker
    };
}

const mapDispatchToProps = {
    ClickerIncrementAction,
    ClickerDecrementAction
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);