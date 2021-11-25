import { Formik,Field,Form } from 'formik'
import React from 'react'
import { addActorAction } from '../actions/ActorActions';
import { connect } from 'react-redux';
const crypto = require("crypto");
const ActorForm = ({addActorAction}) => {
    const handleSubmit = (values) =>{
        addActorAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: crypto.randomBytes(4).toString('hex'),
                    name: '',
                    surname: '',
                    movies: []
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" placeholder="Imię" />
                        <Field name="surname" placeholder="Nazwisko" />
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
        actors: state.actors
    };
}
const mapDispatchToProps ={addActorAction};
export default connect(mapStateToProps,mapDispatchToProps)(ActorForm);