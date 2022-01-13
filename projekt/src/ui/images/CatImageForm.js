import { Formik,Field,Form } from 'formik'
import React from 'react'
import { useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import '../../styling/breeds/CatBreedDetail.css'
import { addCatImage } from '../../ducks/images/operations';
import { updateCatImage } from '../../ducks/images/operations';
import {useHistory} from "react-router-dom";
import { getCatImageList } from "../../ducks/images/operations";
import { getAllCatImages} from "../../ducks/images/selectors";
import { getImageCategoriesList } from "../../ducks/imagesCategories/operations";
import { getAllImagesCategories} from "../../ducks/imagesCategories/selectors";
import { getAllCatBreeds } from "../../ducks/breeds/selectors";
import { getCatBreedList } from "../../ducks/breeds/operations";
import '../../styling/images/CatImageForm.css'
import * as Yup from 'yup';
 
const ImageSchema = Yup.object().shape({
    url: Yup.string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    )
    .required('Please enter an image url'),
});

const CatImageForm = ({image,breeds,categories,getImageCategoriesList,getCatImageList,getCatBreedList,addCatImage,updateCatImage}) => {
    const history = useHistory()
    const handleSubmit = (values) =>{
        history.push('/images')
        const breed = breeds.slice(0).filter(breed=>breed.id === values.breeds)
        const category = categories.slice(0).filter(category=>category.id === parseInt(values.categories))
        image ? updateCatImage({...values,'breeds':breed,'categories': category}) : addCatImage({...values,'breeds':breed,'categories': category})
    }
    useEffect(() => {
        if(categories.length === 0){getImageCategoriesList()}
        if(breeds.length === 0){getCatBreedList()}
        if(!image){getCatImageList()}  
    },[])

    return (
        <div>
        <Formik
            validationSchema={ImageSchema}
            initialValues={{
                id: image ? image.id : uuidv4().slice(0,4),
                breeds: image ? image.breeds.id : 0,
                categories: image ? 'categories' in image ? image.categories.id : '' : 0,
                url: image ? image.url : ''
            }}
            onSubmit={(values) => handleSubmit(values)}
            enableReinitialize={true}>
            {({ errors, touched }) => (
                <Form>
                    {errors.url && touched.url ? (<div>{errors.url}</div>) : null}
                    <Field name="url" placeholder="Image url" />
                    <Field as="select" name="categories">
                        <option value="">No category selected</option>
                        {   categories && categories.map(category=>{
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })
                            }
                    </Field>
                    <Field as="select" name="breeds">
                        <option value="">No breed selected</option>
                        {   breeds && breeds.map(breed=>{
                            return (
                                <option key={breed.id} value={breed.id}>{breed.name}</option>
                            )
                        })
                            }
                    </Field>
                    <button type="submit">
                        Zatwierdz
                    </button>
                </Form>
            )}
            </Formik>
    </div>
    )
}
const mapStateToProps = (state,ownProps) => {
    return {
        image: getAllCatImages(state).find(image => image.id === ownProps.match.params.id),
        categories: getAllImagesCategories(state),
        breeds: getAllCatBreeds(state)
    };
}
const mapDispatchToProps ={
    getCatImageList,
    addCatImage,
    updateCatImage,
    getImageCategoriesList,
    getCatBreedList

};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CatImageForm));