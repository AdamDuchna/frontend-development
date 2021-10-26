import React from 'react'
import {Field,Form,Formik} from "formik"
import {v4 as uuidv4 } from 'uuid';
import { addTodoAction } from '../actions/TodoActions';
import { connect } from 'react-redux';
import { useEffect } from "react";
const TodoForm = (props) => {
    const handleSubmit = (values) => {
        props.addTodoAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    text: '',
                    date: '',
                    done: 'false'
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="text" />
                        <Field name="date" />
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