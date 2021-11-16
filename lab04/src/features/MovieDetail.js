import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router';
import {Link} from "react-router-dom";
import { editMovieDirectorAction } from '../actions/MovieActions';
const MovieDetail = ({movies,directors,editMovieDirectorAction},props) => {
    const {id} = useParams()
    const movie = movies.find(t=>t.id === id)
    const director = directors.find(t=>t.id === movie.directorid)
    const handleSeletion = (e) =>{
        editMovieDirectorAction({"dirid":e.target.value,"movieid":movie.id})
    }
    return (
    <div className="movie-detail">
        <div>Id: {movie.id}</div>
        <div>Title: {movie.title}</div>
        <div>Year: {movie.productionYear}</div>
        <div>Select director:<select onChange={e=>handleSeletion(e)}><option></option>{directors.map(director=>(<option value={director.id}>{director.directorName+" "+director.directorSurname}</option>))}</select></div>
        { director != undefined ? <>
        <div>Name:{director.directorName}</div>
        <div>Surname:{director.directorSurname}</div>
        <div>Age:{director.age}</div></> : <div>No director assigned</div>}
    </div>)
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        directors: state.directors
    };
}
const mapDispatchToProps ={editMovieDirectorAction};
export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);