import { Formik,Field,Form } from 'formik'
import React from 'react'
import {uuidv4}from 'uiidv4'

export default function DirectorForm() {
    const handleSubmit = (values) =>{

    }
    return (
        <div>
            <Formik
                initialValues={{
                    directorName: '',
                    directorSurname: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="directorName" />
                        <Field name="directorSurname" />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}
