import React from 'react'
import {Form,Formik,Field} from 'formik'
import { addMovieAction} from '../actions/MovieActions';
import { connect } from 'react-redux';
const crypto = require("crypto");


const MovieForm = ({addMovieAction})=> {
    const handleSubmit = (values) => {
        addMovieAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    title: '',
                    productionYear: '',
                    directorid: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="title" placeholder="Tytuł"/>
                        <Field name="productionYear" placeholder="Rok" />
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
        movies: state.movies
    };
}
const mapDispatchToProps ={addMovieAction};
export default connect(mapStateToProps,mapDispatchToProps)(MovieForm);