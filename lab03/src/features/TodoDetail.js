import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router';
import { withRouter } from './withRouter';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import './TodoDetail.css'
const TodoDetail = ({todos},props) => {
    const {id} = useParams()
    const todo = todos.find(t=>t.id === id)
    console.log(todo.done)
    return (<div className="detal">
        <div>Id: {todo.id}</div>
        <div>Content: {todo.text}</div>
        <div>Date: {todo.date}</div>
        <div>Finished: {todo.done.toString()}</div>
    </div>)
}
const mapStateToProps = (state,props) => {
    console.log("Propsy",props)
    return {
        todos: state.todos
    };
}
const mapDispatchToProps ={};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TodoDetail));