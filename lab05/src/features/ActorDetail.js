import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router';
const ActorDetail = ({actors},props) => {
    const {id} = useParams()
    const actor = actors.find(t=>t.id === id)
    
    return (<div className="actor-detail">
        <div>Id: {actor.id}</div>
        <div>Name: {actor.name}</div>
        <div>Surname: {actor.surname}</div>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        actors: state.actors
    };
}
const mapDispatchToProps ={};
export default connect(mapStateToProps,mapDispatchToProps)(ActorDetail);