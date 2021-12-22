import React from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { useParams } from 'react-router';
const DirectorDetail = ({cats},props) => {
    const {id} = useParams()
    const cat = cats.find(t=>t.id === id)
    return (<div>
        <div>Id: {cat.id}</div>
        <div>Recievers name: {cat.name}</div>
        <div>Recievers surname: {cat.surname}</div>
        <div>Cats race: {cat.CatRace}</div>
        <div>Cats color: {cat.CatColor}</div>
        <div>Cats age: {cat.CatAge}</div>
        <Link to="edit" style={{ textDecoration: 'none', color: "black" }}><button>Edit</button></Link>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        cats: state.cats
    };
}
const mapDispatchToProps ={};
export default connect(mapStateToProps,mapDispatchToProps)(DirectorDetail);