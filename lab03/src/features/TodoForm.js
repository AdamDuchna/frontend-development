import React from 'react'
import {Field,Form,Formik} from "formik"
import { addTodoAction } from '../actions/TodoActions';
import { connect } from 'react-redux';
import './TodoForm.css'
const crypto = require("crypto");
const TodoForm = (props) => {
    const handleSubmit = (values) => {
        props.addTodoAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    text: '',
                    date: '',
                    done: 'false'
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="text" placeholder="Dodaj todo" />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}
const mapStatetoProps = state => {
    return {
        todos: state.todos
    }
};
const mapDispatchToProps ={addTodoAction};
export default connect(mapStatetoProps,mapDispatchToProps)(TodoForm);