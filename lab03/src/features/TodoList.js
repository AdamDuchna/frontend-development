import { connect } from "react-redux";
import { deleteTodoAction,editTodoAction,doneTodoAction,updateTodoAction } from "../actions/TodoActions";
import './TodoList.css' 
import {Link} from "react-router-dom";
import { useEffect,useState } from "react";

const TodoList = ({ todos, deleteTodoAction,editTodoAction,doneTodoAction,updateTodoAction },props) => {
    const [note,setNote]  = useState("")
    const handleEdit=(el)=>{
        if(el.editing){updateTodoAction({"id":el.id,"note":note})}
        editTodoAction(el)
    }
    return (
        <div>
            {todos.map(todo => ( <div className={`todo-${todo.done}`} key={todo.id}>{todo.editing ? <input 
            value={note} 
            onChange={e=>setNote(e.target.value)}></input>
                : <Link to={`/todos/${todo.id}`} style={{ textDecoration: 'none', color: "black" }}>{todo.text} </Link>
                }
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => deleteTodoAction(todo)}>Usuń</button>
                <button onClick={()=>{doneTodoAction(todo)}}>Done</button>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state,props) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = {
    deleteTodoAction,
    editTodoAction,
    doneTodoAction,
    updateTodoAction
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);