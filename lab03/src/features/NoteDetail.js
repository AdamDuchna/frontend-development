import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router';
import { withRouter } from './withRouter';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import './TodoDetail.css'
const NoteDetail = ({notes},props) => {
    const {id} = useParams()
    const note = notes.find(t=>t.id === id)
    return (<div className="detal">
        <div>Id: {note.id}</div>
        <div>Content: {note.text}</div>
    </div>)
}
const mapStateToProps = (state,props) => {
    return {
        notes: state.notes
    };
}
const mapDispatchToProps ={};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NoteDetail));