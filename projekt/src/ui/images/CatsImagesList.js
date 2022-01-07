
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
    const [sortedImages, setSortedImages] = useState(images)
    const [ImagesBySearch, setImagesBySearch] = useState(images)
    const [ImagesByFiletypes, setImagesByFiletypes] = useState(images)
    const [ImagesByCategory, setImagesByCategory] = useState(images)
    
    const [sorting, setSorting] = useState('asc')
    const [filetypes, setFiletypes] = useState([])
    const [category, setCategory] = useState("")
    const [searched,setSearched] = useState("")

    useEffect(() => {
        if( sorting === 'asc'){
            setSortedImages(sortedImages.slice(0).sort((a, b) => a.id !== b.id ? a.id < b.id ? -1 : 1 : 0))
        }
        if( sorting === 'dsc'){
            setSortedImages(sortedImages.slice(0).sort((a, b) => a.id !== b.id ? a.id > b.id ? -1 : 1 : 0))
        }
    }, [sorting,filetypes,category,searched.images])

    useEffect(() => {
        if(filetypes.length === 0){ setImagesByFiletypes(sortedImages)}
        else{setImagesByFiletypes(sortedImages.slice(0).filter(image=> filetypes.some(type=> image.url.includes(type))))}
    }, [sorting,filetypes,category,searched,sortedImages])

    useEffect(() => {
        const filtered = breeds.slice(0).find(breed=> breed.name.toLowerCase().search(searched.toLowerCase())!==-1)
        const withBreeds = ImagesByFiletypes.slice(0).filter(img=> img.breeds.length !==0)
        if(searched.length === 0 || filtered === undefined){ setImagesBySearch(ImagesByFiletypes)}
        else{setImagesBySearch(withBreeds.slice(0).filter(img=>img.breeds[0].id === filtered.id))}
    }, [sorting,filetypes,category,searched,sortedImages,ImagesByFiletypes])

    useEffect(() => {
        const withCategories = ImagesBySearch.slice(0).filter(img=> 'categories' in img && img.categories.length !== 0 )
        if(category === ""){ setImagesByCategory(ImagesBySearch)}
        else{setImagesByCategory(withCategories.slice(0).filter(img=>img.categories[0].id === category.id))}
    }, [sorting,filetypes,category,searched,sortedImages,ImagesByFiletypes,ImagesBySearch])

    useEffect(()=>{
        if(categories.length === 0){getImageCategoriesList()}
        if(breeds.length === 0){getCatBreedList()}
        if(images.length === 0){getCatImageList()}  
    },[])


    useEffect(()=>{setSortedImages(images.slice(0).sort((a, b) => a.id !== b.id ? a.id < b.id ? -1 : 1 : 0))},[images])
    

    const HandleCheckFilter=(filetype)=>{
        if(filetypes.includes(filetype)){setFiletypes(filetypes.filter(e=>e!==filetype))}
        else{setFiletypes([...filetypes,filetype])}
    }


    return (
        <div>
            <div className="images-filters">
            <input  placeholder="Search for breed..." onChange={e=>setSearched(e.target.value)}></input>
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
                <div>
                <div className="images-fieldname">File formats:</div>
                    <div className="images-checkboxes">
                        <input type="checkbox" name=".jpg" onClick={e=>HandleCheckFilter(e.target.name)}/>
                        <label>jpg</label>
                        <input type="checkbox" name=".png" onClick={e=>HandleCheckFilter(e.target.name)}/>
                        <label>png</label>
                        <input type="checkbox" name=".gif" onClick={e=>HandleCheckFilter(e.target.name)}/>
                        <label>gif</label>
                    </div>
                </div>
            </div>
            {   
                <div className="images-list">
                    <Link to='/images/add' style={{ textDecoration: 'none', color: "black" }}>
                    <div key="new-image" className="image"><div className="no-image">+</div>
                    </div></Link>
                    {ImagesByCategory && ImagesByCategory.map(image => {
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