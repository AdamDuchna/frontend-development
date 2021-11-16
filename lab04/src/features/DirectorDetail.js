import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router';
import {Link} from "react-router-dom";
const DirectorDetail = ({directors},props) => {
    const {id} = useParams()
    const director = directors.find(t=>t.id === id)
    return (<div className="director-detail">
        <div>Id: {director.id}</div>
        <div>Name: {director.directorName}</div>
        <div>Surname: {director.directorSurname}</div>
        <div>Age: {director.age}</div>
        <Link to="edit" style={{ textDecoration: 'none', color: "black" }}><button>Edit</button></Link>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        directors: state.directors
    };
}
const mapDispatchToProps ={};
export default connect(mapStateToProps,mapDispatchToProps)(DirectorDetail);