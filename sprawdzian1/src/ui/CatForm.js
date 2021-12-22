import { Formik,Field,Form } from 'formik'
import React from 'react'
import { addCatAction,editCatAction } from '../ducks/catpackages/actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

const crypto = require("crypto");
const CatForm = ({cats,addCatAction,editCatAction}) => {
    const {id} = useParams()
    const cat = cats.find(t=>t.id === id)
    const handleSubmit = (values) =>{
        cat ? editCatAction(values) : addCatAction(values)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: cat ? cat.id : crypto.randomBytes(4).toString('hex'),
                    name: cat ? cat.name : '',
                    surname: cat ? cat.surname : '',
                    CatRace: cat ? cat.CatRace : '',
                    CatColor: cat ? cat.CatColor : '',
                    CatAge: cat ? cat.CatAge : ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" placeholder="Imię" />
                        <Field name="surname" placeholder="Nazwisko" />
                        <Field name="CatRace" placeholder="Gatunek kota" />
                        <Field name="CatAge" placeholder="Wiek kota" />
                        <div id="my-radio-group">Cats Color</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                            <Field type="radio" name="CatColor" value="red" />
                            red
                            </label>
                            <label>
                            <Field type="radio" name="CatColor" value="grey" />
                            grey
                            </label>
                            <label>
                            <Field type="radio" name="CatColor" value="black" />
                            black
                            </label>
                            <label>
                            <Field type="radio" name="CatColor" value="white" />
                            white
                            </label>
                        </div>

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
const mapDispatchToProps ={addCatAction,editCatAction};
export default connect(mapStateToProps,mapDispatchToProps)(CatForm);