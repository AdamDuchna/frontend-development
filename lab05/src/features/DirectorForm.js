import { Formik,Field,Form } from 'formik'
import React from 'react'
import { addDirectorAction } from '../actions/DirectorActions';
import { connect } from 'react-redux';
const crypto = require("crypto");
const DirectorForm = ({addDirectorAction}) => {
    const handleSubmit = (values) =>{
        addDirectorAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    directorName: '',
                    directorSurname: '',
                    age: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="directorName" placeholder="Imię" />
                        <Field name="directorSurname" placeholder="Nazwisko" />
                        <Field name="age" placeholder="Wiek"/>
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        directors: state.directors
    };
}
const mapDispatchToProps ={addDirectorAction};
export default connect(mapStateToProps,mapDispatchToProps)(DirectorForm);