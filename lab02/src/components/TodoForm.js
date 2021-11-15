import React from 'react'
import {Field,Form,Formik,handleReset} from "formik"
import { addTodoAction } from '../actions/TodoActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


let crypto = require("crypto");
const TodoForm = (props) => {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        dispatch(addTodoAction(values))
    }
    useEffect(() => {
        console.log(crypto.randomBytes(4).toString('hex'))
    },[handleSubmit])
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    title: '',
                    done: false,
                    editing: false
                }}
                onSubmit={(values,actions) => {
                    actions.resetForm()
                    actions.setValues({
                        id: crypto.randomBytes(4).toString('hex'),
                        title: '',
                        done: false,
                        editing: false
                    })
                    handleSubmit(values)
                }}
                enableReinitialize={true}>
                    <Form>
                        <Field name="title" placeholder="Dodaj todo" />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}
export default TodoForm;