
import { useEffect,useState} from "react";
import { connect } from "react-redux";
import { getCatImageList } from "../../ducks/images/operations";
import { getAllCatImages} from "../../ducks/images/selectors";
import { getImageCategoriesList } from "../../ducks/imagesCategories/operations";
import { getAllImagesCategories} from "../../ducks/imagesCategories/selectors";
import { getAllCatBreeds } from "../../ducks/breeds/selectors";
import { getCatBreedList } from "../../ducks/breeds/operations";
import {Link} from "react-router-dom";
import '../../styling/images/CatsImagesList.css';

const CatsImagesList = ({ breeds,images,categories, getCatImageList,getImageCategoriesList,getCatBreedList } ,props) => {
    const [sorting, setSorting] = useState('asc')
    const [filetypes, setFiletypes] = useState([])
    const [category, setCategory] = useState("")
    const [searched,setSearched] = useState("")

    const [page, setPage] = useState(0)
    const [imagesCount,setimagesCount] = useState(0)
    const pageLimit = 19
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(imagesCount / pageLimit); i++){pageNumbers.push(i)}

    useEffect(()=>{
        getImageCategoriesList()
        if(breeds.length === 0  ){getCatBreedList()}
    },[])

    useEffect(() => {
        console.log(searched)
        getCatImageList(page,sorting,filetypes,category,searched);
    }, [page,sorting,filetypes,category,searched]);

    useEffect(()=>{if(images.length!==0){setimagesCount(images.slice(-1)[0].count)}},[images])
    

    const HandleCheckFilter=(filetype)=>{
        if(filetypes.includes(filetype)){setFiletypes(filetypes.filter(e=>e!==filetype))}
        else{setFiletypes([...filetypes,filetype])}
    }
    const HandleChangeSearch=(search)=>{
        if(search === ""){setSearched("")}
        else{        
            const found=breeds.slice(0).filter(breed=> breed.name.toLowerCase().search(search.toLowerCase())!==-1).slice(0,1)
            if(found.length===1){setSearched(found[0].id)}
            else{setSearched("")}
        }
    }

    return (
        <div>
            <div className="images-filters">
            <input  placeholder="Search for breed..." onChange={e=>HandleChangeSearch(e.target.value)}></input>
            <select className="images-categories" onChange={e=>setCategory(e.target.value)}>
                <option value="">none</option>
                { categories.map(category=>{
                return (<option key={category.id} value={category.id}>{category.name}</option>)
                })}
            </select>
            <select name="sort" id="sort" onChange={e=>setSorting(e.target.value)}>
                <option value="asc">Alphabetical order</option>
                <option value="dsc">Reversed alphabetical order</option>
            </select >
            <select className="pages" onChange={e=>setPage(e.target.value)}>{pageNumbers.map(page=>{
                return(<option key={page} value={page}>{page}</option>)
            })}</select>
                <div>
                    File types:
                    <div className="images-checkboxes">
                        <input type="checkbox" name="jpg" onClick={e=>HandleCheckFilter(e.target.name)}/>
                        <label>jpg</label>
                        <input type="checkbox" name="png" onClick={e=>HandleCheckFilter(e.target.name)}/>
                        <label>png</label>
                        <input type="checkbox" name="gif" onClick={e=>HandleCheckFilter(e.target.name)}/>
                        <label>gif</label>
                    </div>
                </div>
            </div>
            {   
                <div className="images-list">
                    <Link to='/images/add' style={{ textDecoration: 'none', color: "black" }}>
                    <div key="new-image" className="image"><div className="no-image">+</div>
                    </div></Link>
                    {images && images.slice(0,-1).map(image => {
                    return (
                    <div key={image.id} className="image">
                        <Link to={`/images/${image.id}`} style={{ textDecoration: 'none', color: "black" }}>
                        <img alt="?" src={image.url} ></img></Link>
                    </div>)
                    })}
                </div>
            }
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        images: getAllCatImages(state),
        categories: getAllImagesCategories(state),
        breeds: getAllCatBreeds(state)
    };
}
const mapDispatchToProps = {
    getCatImageList,
    getImageCategoriesList,
    getCatBreedList
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsImagesList);