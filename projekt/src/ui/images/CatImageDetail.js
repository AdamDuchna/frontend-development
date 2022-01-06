import { connect } from "react-redux";
import { getAllCatImages } from "../../ducks/images/selectors";
import { withRouter } from "react-router-dom";
import { getCatImageList,delCatImage } from "../../ducks/images/operations";
import '../../styling/CatBreedDetail.css'
import {Link} from "react-router-dom";
import { useEffect } from "react";
const CatBreedDetail = ({image,getCatImageList,delCatImage } ,props) => {
    useEffect(()=>{
        if(!image){getCatImageList()}
    })
    const handleClick=(id)=>{
        delCatImage(id)
    }
    return (
        <div className="image-window">
        <div className="image-details">
            { image ? <>
            {'url' in image ? <img className="image" alt="?"src={image.url}></img> : <div className="no-image">No image</div>}
            <div>Breed:{image.breeds.name}</div>
            <Link to={`/images`} style={{ textDecoration: 'none', color: "black" }}><div onClick={()=>{handleClick(image.id)}}>DELETE</div></Link>
            </> : <>Loading</> }
            
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