import { Formik,Field,Form } from 'formik'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { getAllCatBreeds} from "../../ducks/breeds/selectors";
import { withRouter } from "react-router-dom";
import { getCatBreedList,updateCatBreed,addCatBreed } from '../../ducks/breeds/operations';
import { useEffect } from "react";
import '../../styling/breeds/CatBreedForm.css';
import {useHistory} from "react-router-dom";
import * as Yup from 'yup';


const BreedSchema = Yup.object().shape({
    wikipedia_url: Yup.string().url().required('Please enter an url'),
    vcahospitals_url: Yup.string().url().required('Please enter an url'),
    vetstreet_url: Yup.string().required('Please enter an url'),
    name: Yup.string().required('Please enter a name'),
    alt_names: Yup.string(),
    country_code: Yup.string().required('Please enter a country code').max(2, "Must be 2 letters long"),
    description: Yup.string().required('Please enter a description').max(400, "No longer than 400 letters"),
    temperament: Yup.string().required('Please enter a description of temperament').max(60, "No longer than 60 letters"),
    origin: Yup.string().required('Please enter a country of origin').max(20, "No longer than 20 letters"),
    life_span: Yup.string().matches(/[0-9]*[-][0-9]*/,'Must written as a range a-b').required('Please enter age range'),
    weight_imperial: Yup.string().matches(/[0-9]*[-][0-9]*/,'Must written as a range a-b').required('Please enter weigth range in imperial'),
    weight_metric: Yup.string().matches(/[0-9]*[-][0-9]*/,'Must written as a range a-b').required('Please enter weigth range in metric'),
})


const CatBreedForm = ({breed,getCatBreedList,updateCatBreed,addCatBreed}) => {
    const history = useHistory()
    useEffect(() => {
        if(!breed){getCatBreedList()}
    })
    const handleSubmit=(value)=>{
        history.push('/breeds')
        const weight = {'weight_imperial':value.weight_imperial,'weight_metric':value.weight_metric}
        delete value['weight_imperial'];
        delete value['weight_metric'];
        breed ? updateCatBreed({...value,weight}) : addCatBreed({...value,weight})

    }
    return (
            <Formik
                validationSchema={BreedSchema}
                initialValues={{
                    id: breed ? breed.id : uuidv4().slice(0,4),

                    alt_names: breed ? breed.alt_names : "",
                    cfa_url: breed ? breed.cfa_url : "",
                    temperament: breed ? breed.temperament : "",
                    country_code: breed ? breed.country_code : "",
                    country_codes: breed ? breed.country_codes : "",
                    description: breed ? breed.description : "",
                    life_span: breed ? breed.life_span : "",
                    name: breed ? breed.name : "",
                    origin: breed ? breed.origin : "",
                    reference_image_id: breed ? breed.reference_image_id : "",
                    image: breed ? breed.image : "",

                    adaptability: breed ? breed.adaptability : 1,
                    affection_level: breed ? breed.affection_level :1,
                    dog_friendly: breed ? breed.dog_friendly : 1,
                    energy_level: breed ? breed.energy_level : 1,
                    health_issues: breed ? breed.health_issues : 1,
                    intelligence: breed ? breed.intelligence : 1,
                    shedding_level: breed ? breed.shedding_level : 1,
                    social_needs: breed ? breed.social_needs : 1,
                    stranger_friendly: breed ? breed.stranger_friendly : 1,
                    vocalisation: breed ? breed.vocalisation : 1,
                    child_friendly: breed ? breed.child_friendly :1,

                    experimental: breed ? breed.experimental : 0,
                    grooming: breed ? breed.grooming : 0,
                    hairless: breed ? breed.hairless : 0,
                    indoor: breed ? breed.indoor : 0,
                    lap: breed ? breed.lap : 0,
                    natural: breed ? breed.natural : 0,
                    rare: breed ? breed.rare : 0,
                    rex: breed ? breed.rex : 0,
                    short_legs: breed ? breed.short_legs : 0,
                    suppressed_tail: breed ? breed.suppressed_tail : 0,
                    hypoallergenic: breed ? breed.hypoallergenic : 0,

                    wikipedia_url: breed ? breed.wikipedia_url : "",
                    vcahospitals_url: breed ? breed.vcahospitals_url : "",
                    vetstreet_url: breed ? breed.vetstreet_url : "",

                    weight_imperial: breed ? breed.weight.imperial : "",
                    weight_metric: breed ? breed.weight.metric : ""
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                {({ errors, touched }) => (
                    <Form>
                        {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                        <label>Name: <Field name="name" placeholder="name" /></label>
                        {errors.origin && touched.origin ? (<div>{errors.origin}</div>) : null}
                        <label>Origin: <Field name="origin" placeholder="origin" /></label>
                        {errors.country_code && touched.country_code ? (<div>{errors.country_code}</div>) : null}
                        <label>Country code:<Field name="country_code" placeholder="country_code" /></label>
                        {errors.temperament && touched.temperament ? (<div>{errors.temperament}</div>) : null}
                        <label>Temperament: <Field name="temperament" placeholder="temperament" /></label>
                        {errors.description && touched.description ? (<div>{errors.description}</div>) : null}
                        <label>Description: <Field name="description" placeholder="description" /></label>
                        {errors.life_span && touched.life_span? (<div>{errors.life_span}</div>) : null}
                        <label>Lifespan: <Field name="life_span" placeholder="life_span" /></label>
                        {errors.weight_imperial && touched.weight_imperial ? (<div>{errors.weight_imperial}</div>) : null}
                        <label>Weigth imperial: <Field name="weight_imperial" placeholder="weight_imperial" /></label>
                        {errors.weight_metric && touched.weight_metric ? (<div>{errors.weight_metric}</div>) : null}
                        <label>Weigth metric:<Field name="weight_metric" placeholder="weight_metric" /></label>
                        {errors.wikipedia_url && touched.wikipedia_url ? (<div>{errors.wikipedia_url}</div>) : null}
                        <label>Wikipedia url:<Field name="wikipedia_url" placeholder="wikipedia_url" /></label>
                        {errors.vcahospitals_url && touched.vcahospitals_url ? (<div>{errors.vcahospitals_url}</div>) : null}
                        <label>Vcahospitals url:<Field name="vcahospitals_url" placeholder="vcahospitals_url" /></label>
                        {errors.vetstreet_url && touched.vetstreet_url ? (<div>{errors.vetstreet_url}</div>) : null}
                        <label>Vetstreet url:<Field name="vetstreet_url" placeholder="vetstreet_url" /></label>
                        

                        <div className='breed-form-fields'>
                            <div className='breed-form-range'>      
                            <label>Adaptability: <Field type="range" name="adaptability" min="1" max="5"/></label>
                            <label>Affection: <Field type="range" name="affection_level" min="1" max="5"/></label>
                            <label>Dog friendliness: <Field type="range" name="dog_friendly" min="1" max="5"/></label>
                            <label>Energy: <Field type="range" name="energy_level" min="1" max="5"/></label>
                            <label>Health issues: <Field type="range" name="health_issues" min="1" max="5"/></label>
                            <label>Shedding: <Field type="range" name="shedding_level" min="1" max="5"/></label>
                            <label>Social needs: <Field type="range" name="social_needs" min="1" max="5"/></label>
                            <label>Stranger friendliness: <Field type="range" name="stranger_friendly" min="1" max="5"/></label>
                            <label>Vocalisation: <Field type="range" name="vocalisation" min="1" max="5"/></label>
                            <label>Child friendliness: <Field type="range" name="child_friendly" min="1" max="5"/></label>

                            </div>

                            <div className='breed-form-binary'>
                            <label>Requires grooming<Field type="range" name="grooming" min="0" max="1"/></label>
                            <label>Experimental<Field type="range" name="experimental" min="0" max="1"/></label>
                            <label>Hairless<Field type="range" name="hairless" min="0" max="1"/></label>
                            <label>Hypoallergenic<Field type="range" name="hypoallergenic" min="0" max="1"/></label>
                            <label>Kept indoors<Field type="range" name="indoor" min="0" max="1"/></label>
                            <label>Lap cat<Field type="range" name="lap" min="0" max="1"/></label>
                            <label>Natural breed<Field type="range" name="natural" min="0" max="1"/></label>
                            <label>Rare<Field type="range" name="rare" min="0" max="1"/></label>
                            <label>Short legged<Field type="range" name="short_legs" min="0" max="1"/></label>
                            <label>Supressed tail<Field type="range" name="suppressed_tail" min="0" max="1"/></label>
                            <label>Rex<Field type="range" name="rex" min="0" max="1"/></label>
                            </div>
                        </div>

                        <button type="submit">
                            Submit
                        </button>

                    </Form>
                )}
                </Formik>
    )
}
const mapStateToProps = (state,ownProps) => {
    return {
        breed: getAllCatBreeds(state).find(breed => breed.id === ownProps.match.params.id)
    };
}
const mapDispatchToProps ={
    getCatBreedList,
    updateCatBreed,
    addCatBreed
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CatBreedForm));