import { connect } from "react-redux";
import { deleteTodoAction,editTodoAction,doneTodoAction } from "../actions/TodoActions";
import './TodoList.css' 
import {Link} from "react-router-dom";
const TodoList = ({ todos, deleteTodoAction,editTodoAction,doneTodoAction } ,props) => {
    console.log(todos)
    return (
        <div>
            {todos.map(todo => (<div className={`todo-${todo.done}`} key={todo.id}><Link to={`/${todo.id}`} style={{ textDecoration: 'none', color: "black" }}>{todo.text} </Link><button onClick={() => deleteTodoAction(todo)}>Usuń</button><button onClick={()=>{doneTodoAction(todo)}}>Done</button></div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = {
    deleteTodoAction,
    editTodoAction,
    doneTodoAction
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);