import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction,editTodoAction,updateTodoAction,finishTodoAction } from "../actions/TodoActions";
import { useState,useEffect } from "react";
const TodoList = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const [note,setNote]  = useState("")
    const handleEdit=(el)=>{
        if(el.editing){
            dispatch(updateTodoAction({"id":el.id,"note":note}))
            setNote("")}
        dispatch(editTodoAction(el))
    }
    useEffect(() => {
        console.log(todos);
    }, [todos])
    return (
        <div>
        {todos.map(todo => ( <div className={`todo-${todo.done}`} key={todo.id}>{todo.editing ? <input 
        value={note} 
        onChange={e=>setNote(e.target.value)}></input>
            : <div>{todo.title}</div>
            }
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => dispatch(deleteTodoAction(todo))}>Usuń</button>
            <button onClick={()=> dispatch(finishTodoAction(todo))}>Done</button>
            </div>))}
    </div>
    )
};


export default TodoList;