import { connect } from "react-redux";
import { getAllCatBreeds } from "../../ducks/breeds/selectors";
import { withRouter } from "react-router-dom";
import { getCatBreedList,delCatBreed } from "../../ducks/breeds/operations";
import '../../styling/CatBreedDetail.css'
import {Link} from "react-router-dom";
import { useEffect } from "react";
const CatBreedDetail = ({breed,getCatBreedList,delCatBreed} ,props) => {
    useEffect(()=>{
        if(!breed){getCatBreedList()}
    })
    const handleClick=(id)=>{
        delCatBreed(id)
    }
    return (
        <div className="breed-window">
        <div className="breed-details">
            { breed ? <>
            {'image' in breed ? <img className="image" alt="?"src={breed.image.url}></img> : <div className="no-image">No image</div>}
            <div>Name: {breed.name}</div>
            <div>Origin: {breed.origin}</div>
            <div>Temperament: {breed.temperament}</div>
            <div>{breed.description}</div>
            <Link to={`/breeds`} style={{ textDecoration: 'none', color: "black" }}><div onClick={()=>{handleClick(breed.id)}}>DELETE</div></Link>
            </> : <>Loading</> }
            
        </div>
        </div>
    )
};
const mapStateToProps = (state,ownProps) => {
    return {
        breed: getAllCatBreeds(state).find(breed => breed.id === ownProps.match.params.id)
    };
}

const mapDispatchToProps = {
    getCatBreedList,
    delCatBreed
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatBreedDetail));