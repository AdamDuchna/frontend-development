import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router';
import {Link} from "react-router-dom";
import { editMovieDirectorAction,addActorMovieAction } from '../actions/MovieActions';
import { addMovieActorAction } from '../actions/ActorActions';
import ActorList from './ActorList';
const MovieDetail = ({movies,directors,actors,editMovieDirectorAction,addMovieActorAction,addActorMovieAction},props) => {
    const {id} = useParams()
    const movie = movies.find(t=>t.id === id)
    console.log(movie)
    console.log(actors)
    const director = directors.find(t=>t.id === movie.directorid)
    const handleSeletion = (e) =>{
        editMovieDirectorAction({"dirid":e.target.value,"movieid":movie.id})
    }
    const handleActorsSeletion = (e) =>{
        const selectedIndex = e.target.options.selectedIndex;
        const idx = e.target.options[selectedIndex].getAttribute('index');
        addActorMovieAction({"movieid":movie.id,"actor": e.target.value})
        addMovieActorAction({"id": idx, "movie":movie.title})
    }
    return (
    <div className="movie-detail">
        <div>Id: {movie.id}</div>
        <div>Title: {movie.title}</div>
        <div>Year: {movie.productionYear}</div>
        <div>Select director:<select onChange={e=>handleSeletion(e)}><option></option>
        {directors.map(director=>(<option key={director.id} value={director.id}>{director.directorName+" "+director.directorSurname}</option>))}</select></div>
        <div>Select actor:<select onChange={e=>handleActorsSeletion(e)}><option></option>
        {actors.map(actor=>(<option index={actor.id} key={actor.id} value={actor.name+" "+actor.surname}>{actor.name+" "+actor.surname}</option>))}</select></div>
        { director ? <>
        <div>Name:{director.directorName}</div>
        <div>Surname:{director.directorSurname}</div>
        <div>Age:{director.age}</div></> : <div>No director assigned</div>}
    </div>)
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        directors: state.directors,
        actors: state.actors
    };
}
const mapDispatchToProps ={editMovieDirectorAction,addMovieActorAction,addActorMovieAction};
export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);