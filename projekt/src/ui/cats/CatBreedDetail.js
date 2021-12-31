import { connect } from "react-redux";
import { getAllCatBreeds } from "../../ducks/cats/selectors";
import { withRouter } from "react-router-dom";
import '../../styling/CatBreedDetail.css'
const CatBreedDetail = ({breed} ,props) => {
    return (
        <div className="breed-details">
            { breed ? <>
            {'image' in breed ? <img className="image" src={breed.image.url}></img> : <div className="no-image">No image</div>}
            <div>Name: {breed.name}</div>
            <div>Origin: {breed.origin}</div>
            <div>Temperament: {breed.temperament}</div>
            <div>{breed.description}</div>
            </> : <>Loading</>}

        </div>
    )
};
const mapStateToProps = (state,ownProps) => {
    return {
        breed: getAllCatBreeds(state).find(breed => breed.id === ownProps.match.params.id)
    };
}

export default withRouter(connect(mapStateToProps, null)(CatBreedDetail));