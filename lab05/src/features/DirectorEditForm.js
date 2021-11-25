import { Formik,Field,Form } from 'formik'
import React from 'react'
import { addDirectorAction,updateDirectorAction } from '../actions/DirectorActions';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
const DirectorEditForm = ({directors,updateDirectorAction}) => {
    const {id} = useParams()
    const director = directors.find(t=>t.id === id)
    const handleSubmit = (values) =>{
        updateDirectorAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={director}
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
const mapDispatchToProps ={updateDirectorAction};
export default connect(mapStateToProps,mapDispatchToProps)(DirectorEditForm);