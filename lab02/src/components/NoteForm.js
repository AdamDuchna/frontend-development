import React from 'react'
import {Field,Form,Formik} from "formik"
import { addNoteAction } from '../actions/NoteActions';
import { useDispatch } from 'react-redux';


const crypto = require("crypto");
const NoteForm = (props) => {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        dispatch(addNoteAction(values))
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    text: '',
                }}
                onSubmit={(values,actions) => {
                    actions.resetForm()
                    actions.setValues({
                        id: crypto.randomBytes(4).toString('hex'),
                        text: ''
                    })
                    handleSubmit(values)}}
                enableReinitialize={true}>
                    <Form>
                        <Field name="text" placeholder="Dodaj notkę" />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}
export default NoteForm;