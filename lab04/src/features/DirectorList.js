import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { useState } from "react";

const DirectorList = ({ directors},props) => {
    return (
        <div className="directors">
            {directors.map(director => ( <div className="director" key={director.id}> 
            <Link to={`/directors/${director.id}`} style={{ textDecoration: 'none', color: "black" }}>
                <div>{director.directorName} {director.directorSurname}</div>
                </Link>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        directors: state.directors
    };
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(DirectorList);