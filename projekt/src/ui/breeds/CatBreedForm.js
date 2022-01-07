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
                initialValues={{
                    id: breed ? breed.id : uuidv4(),

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
                    <Form>
                        <label>Name: <Field name="name" placeholder="name" /></label>
                        <label>Origin: <Field name="origin" placeholder="origin" /></label>
                        <label>Country code:<Field name="country_code" placeholder="country_code" /></label>
                        <label>Temperament: <Field name="temperament" placeholder="temperament" /></label>
                        <label>Description: <Field name="description" placeholder="description" /></label>
                        <label>Lifespan: <Field name="life_span" placeholder="life_span" /></label>
                        <label>Weigth imperial: <Field name="weight_imperial" placeholder="weight_imperial" /></label>
                        <label>Weigth metric:<Field name="weight_metric" placeholder="weight_metric" /></label>
                        <label>Wikipedia url:<Field name="wikipedia_url" placeholder="wikipedia_url" /></label>
                        <label>Vcahospitals url:<Field name="vcahospitals_url" placeholder="vcahospitals_url" /></label>
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

                            <div className='breed-form-checkbox'>
                            <label>Requires grooming<Field type="checkbox" name="grooming" /></label>
                            <label>Experimental<Field type="checkbox" name="experimental" /></label>
                            <label>Hairless<Field type="checkbox" name="hairless" /></label>
                            <label>Hypoallergenic<Field type="checkbox" name="hypoallergenic" /></label>
                            <label>Kept indoors<Field type="checkbox" name="indoor" /></label>
                            <label>Lap cat<Field type="checkbox" name="lap" /></label>
                            <label>Natural breed<Field type="checkbox" name="natural" /></label>
                            <label>Rare<Field type="checkbox" name="rare" /></label>
                            <label>Short legged<Field type="checkbox" name="short_legs" /></label>
                            <label>Supressed tail<Field type="checkbox" name="suppressed_tail" /></label>
                            <label>Rex<Field type="checkbox" name="rex" /></label>
                            </div>
                        </div>

                        <button type="submit">
                            Submit
                        </button>

                    </Form>
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