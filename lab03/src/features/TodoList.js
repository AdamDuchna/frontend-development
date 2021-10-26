import { connect } from "react-redux";
import { deleteTodoAction,editTodoAction } from "../actions/TodoActions";
const TodoList = ({ todos, deleteTodoAction,editTodoAction } ,props) => {
    return (
        <div>
            {todos.map(todo => (<div>{todo.text} <button onClick={() => deleteTodoAction(todo)}>Usuń</button></div>))}
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
    editTodoAction
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);