import { Formik,Field,Form } from 'formik'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { getAllCatImages} from "../../ducks/images/selectors";
import { withRouter } from "react-router-dom";
import '../../styling/breeds/CatBreedDetail.css'
import { getCatImageList } from '../../ducks/images/operations';

const CatImageForm = ({image,getCatImageList}) => {
    return (
        <div>
        <Formik
            initialValues={{
                id: image ? image.id : uuidv4().slice(0,4),
                breeds: image ? image.breeds : [],
                categories: image ? image.categories : [],
                url: image ? image.url : ''
            }}
        
            enableReinitialize={true}>
                <Form>
                    <Field name="url" placeholder="Image url" />
                    <Field name="breeds" placeholder="Cat breed on image" />
                    <Field name="categories" placeholder="Image category" />

                    <button type="submit">
                        Zatwierdz
                    </button>
                </Form>
            </Formik>
    </div>
    )
}
const mapStateToProps = (state,ownProps) => {
    return {
        image: getAllCatImages(state).find(image => image.id === ownProps.match.params.id)
    };
}
const mapDispatchToProps ={getCatImageList};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CatImageForm));