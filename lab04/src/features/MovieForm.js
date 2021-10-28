import React from 'react'
import {Form,Formik,Field} from 'formik'
import {uuidv4} from 'uuidv4'

export default function MovieForm() {
    const handleSubmit = (values) => {
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    title: '',
                    productionYear: '',
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="title" />
                        <Field name="productionYear" />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}
