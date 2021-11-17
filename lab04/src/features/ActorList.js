import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { useState } from "react";

const MovieList = ({ actors},props) => {
    return (
        <div className="actors">
            {actors.map(actor => ( <div className="actor" key={actor.id}> 
            <Link to={`/actors/${actor.id}`} style={{ textDecoration: 'none', color: "white" }}>{actor.name} {actor.surname}</Link>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        actors: state.actors
    };
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);