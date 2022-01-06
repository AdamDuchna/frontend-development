import { Formik,Field,Form } from 'formik'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { getAllCatBreeds} from "../../ducks/breeds/selectors";

const CatBreedForm = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    adaptability: 1,
                    affection_level: 1,
                    alt_names: "",
                    cfa_url: "",
                    child_friendly: 1,
                    country_code: "",
                    country_codes: "",
                    description: "",
                    dog_friendly: 1,
                    energy_level: 1,
                    experimental: 0,
                    grooming: 0,
                    hairless: 0,
                    health_issues: 1,
                    hypoallergenic: 0,
                    id: uuidv4(),
                    image: "",
                    indoor: 0,
                    intelligence:1,
                    lap: 0,
                    life_span: "",
                    name: "",
                    natural: 0,
                    origin: "",
                    rare: 0,
                    reference_image_id: "",
                    rex: 0,
                    shedding_level: 1,
                    short_legs: 0,
                    social_needs: 1,
                    stranger_friendly: 1,
                    suppressed_tail: 0,
                    temperament: "",
                    vcahospitals_url: "",
                    vetstreet_url: "",
                    vocalisation: 1,
                    weight: "",
                    wikipedia_url: ""
                }}
                
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" placeholder="name" />
                        <Field name="origin" placeholder="origin" />
                        <Field name="country_code" placeholder="country_code" />
                        <Field name="temperament" placeholder="temperament" />
                        <Field name="description" placeholder="description" />
                        <Field name="life_span" placeholder="life_span" />
                        <Field name="weight" placeholder="weight" />
                        <label>
                            Requires grooming
                        <Field type="checkbox" name="grooming" />
                        </label>
                        <label>
                            Hairless
                        <Field type="checkbox" name="hairless" />
                        </label>
                        <label>
                            Hypoallergenic
                        <Field type="checkbox" name="hairless" />
                        </label>
                        <label>
                            Kept indoors
                        <Field type="checkbox" name="indoors" />
                        </label>
                        <label>
                            Lap cat
                        <Field type="checkbox" name="lap" />
                        </label>
                        <label>
                            Natural breed
                        <Field type="checkbox" name="natural" />
                        </label>
                        <label>
                            Rare
                        <Field type="checkbox" name="rare" />
                        </label>
                        <label>
                            Short legged
                        <Field type="checkbox" name="short_legs" />
                        </label>
                        <label>
                            Supressed tail
                        <Field type="checkbox" name="suppressed_tail" />
                        </label>
                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        breeds: getAllCatBreeds(state)
    };
}
const mapDispatchToProps ={};
export default connect(mapStateToProps,mapDispatchToProps)(CatBreedForm);