import { Formik,Field,Form } from 'formik'
import React from 'react'
import { addCatAction } from '../ducks/catpackages/actions';
import { connect } from 'react-redux';
const crypto = require("crypto");
const CatForm = ({cats,addCatAction}) => {
    const handleSubmit = (values) =>{
        addCatAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    name: '',
                    surname: '',
                    CatRace: '',
                    CatColor: '',
                    CatAge: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" placeholder="Imię" />
                        <Field name="surname" placeholder="Nazwisko" />
                        <Field name="CatRace" placeholder="Gatunek kota" />
                        <Field name="CatColor" placeholder="Kolor kota" />
                        <Field name="CatAge" placeholder="Wiek kota" />
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
        cats: state.cats
    };
}
const mapDispatchToProps ={addCatAction};
export default connect(mapStateToProps,mapDispatchToProps)(CatForm);