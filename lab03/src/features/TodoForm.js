import React from 'react'
import {Field,Form,Formik} from "formik"
import { addTodoAction } from '../actions/TodoActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from './withRouter';
import './TodoForm.css'
const crypto = require("crypto");
const TodoForm = (props) => {
    const handleSubmit = (values) => {
        props.addTodoAction(values)
    }
    useEffect(() => {
        console.log(props);
    }, [props])
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    text: '',
                    date: '',
                    done: false,
                    editing: false
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
export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(TodoForm));