import { connect } from "react-redux";
import { getAllCatImages } from "../../ducks/images/selectors";
import { withRouter } from "react-router-dom";
import { getCatImageList,delCatImage } from "../../ducks/images/operations";
import '../../styling/images/CatImageDetail.css'
import {Link} from "react-router-dom";
import { useEffect } from "react";
const CatBreedDetail = ({image,getCatImageList,delCatImage } ,props) => {
    useEffect(()=>{
        if(!image){getCatImageList()}
    })
    console.log(image)
    const handleClick=(id)=>{
        delCatImage(id)
    }
    return (
        <div className="image-window">
        <div className="image-details">
            { image ? <>
            {'url' in image ? <img className="image" alt="?"src={image.url}></img> : <div className="no-image">No image</div>}
            <div className="image-info">
            <div>Breed:{image.breeds.length !== 0 ? <Link to={`/breeds/${image.breeds[0].id}`} style={{ textDecoration: 'none', color: "white" }}>{ image.breeds[0].name}</Link> : ' unassigned'}</div>
            <div>Category:{'categories' in image && image.categories !== undefined && image.categories.length !== 0 ? image.categories[0].name : ' unassigned'}</div>
            </div>
            <div className="image-buttons">
            <Link to={`/images`} style={{ textDecoration: 'none', color: "white" }}><div onClick={()=>{handleClick(image.id)}}>DELETE</div></Link>
            <Link to={`/images/edit/${image.id}`} style={{ textDecoration: 'none', color: "white" }}>EDIT</Link>
            </div>
            </> : <div className="loading">Loading</div> }
            
        </div>
        </div>
    )
};
const mapStateToProps = (state,ownProps) => {
    return {
        image: getAllCatImages(state).find(image => image.id === ownProps.match.params.id)
    };
}

const mapDispatchToProps = {
    getCatImageList,
    delCatImage 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatBreedDetail));