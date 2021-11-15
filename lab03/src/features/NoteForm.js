import React from 'react'
import {Field,Form,Formik} from "formik"
import { addNoteAction } from '../actions/NoteActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from './withRouter';
import './TodoForm.css'
const crypto = require("crypto");
const NoteForm = (props) => {
    const handleSubmit = (values) => {
        props.addNoteAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    text: '',
                    done: false,
                    editing: false
                }}
                onSubmit={(values) => handleSubmit(values)}
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
const mapStatetoProps = state => {
    return {
        notes: state.notes
    }
};
const mapDispatchToProps ={addNoteAction};
export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(NoteForm));