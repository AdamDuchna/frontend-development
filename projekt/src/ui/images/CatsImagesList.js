
import { useEffect,useState} from "react";
import { connect } from "react-redux";
import { getCatImageList } from "../../ducks/images/operations";
import { getAllCatImages} from "../../ducks/images/selectors";
import {Link} from "react-router-dom";
import '../../styling/CatsImagesList.css';

const CatsImagesList = ({ images, getCatImageList } ,props) => {
    const [sorting, setSorting] = useState('asc')
    const [page, setPage] = useState(0)
    useEffect(() => {
        if(images.length === 0){getCatImageList(page,sorting)};
    }, [page,sorting,getCatImageList]);

    return (
        <div>
            <select name="sort" id="sort" onChange={e=>setSorting(e.target.value)}>
                <option value="asc">Alphabetical order</option>
                <option value="dsc">Reversed alphabetical order</option>
            </select >
            {
                <div className="images-list">{images && images.map(image => {
                    return (
                    <div key={image.id} className="image">
                        <Link to={`/images/${image.id}`} style={{ textDecoration: 'none', color: "black" }}><img alt="?" src={image.url} ></img></Link>
                    </div>)
                    })}
                </div>
            }
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        images: getAllCatImages(state)
    };
}
const mapDispatchToProps = {
    getCatImageList
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsImagesList);