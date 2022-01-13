
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
    const [displayedImages, setDisplayedImages] = useState(images)
    const [filetypes, setFiletypes] = useState([])
    const [category, setCategory] = useState("")
    const [searched,setSearched] = useState("")
    const [sortedImages,setSortedImages] = useState(images)

    const sortBreeds = (sort) => {
        const fieldTypeList = sort.split("-")
        switch (fieldTypeList[1]){
            default:
            case "dsc":
                setSortedImages(displayedImages.slice(0).sort((a, b) => a[fieldTypeList[0]] !== b[fieldTypeList[0]] ? a[fieldTypeList[0]] > b[fieldTypeList[0]] ? -1 : 1 : 0))
                break;
            case "asc":
                setSortedImages(displayedImages.slice(0).sort((a, b) => a[fieldTypeList[0]] !== b[fieldTypeList[0]] ? a[fieldTypeList[0]] < b[fieldTypeList[0]] ? -1 : 1 : 0))
                break;
            case "none":
                setSortedImages(images)
                break;
            }
    }
    
    const FilterByFiletype =(filetypes,images)=>{
        if(filetypes.length !== 0){return images.slice(0).filter(image=> filetypes.some(type=> image.url.includes(type)))}
        return images
    }

    const FilterBySearch=(searched,images)=>{
        if(searched.length !== 0 ){ 
            const filteredBreeds = breeds.slice(0).find(breed=> breed.name.toLowerCase().search(searched.toLowerCase())!==-1)
            if(filteredBreeds){
                    const withBreeds = images.filter(img=> img.breeds.length !==0)
                    return withBreeds.filter(img=>img.breeds[0].id === filteredBreeds.id)
                }
                return []
            }
        return images
    }

    const FilterByCategory=(category,images)=>{
        if(category !== ""){
            const withCategories = images.filter(img=> 'categories' in img && img.categories.length !== 0 )
            return withCategories.filter(img=>img.categories[0].id === parseInt(category))}
        return images
    }

    const FilterImages=(filetypes,category,searched)=>{
        const toFilter = sortedImages
        const filteredByFiletype = FilterByFiletype(filetypes,toFilter)
        const filteredBySearch = FilterBySearch(searched,filteredByFiletype)
        const filteredByCategory = FilterByCategory(category,filteredBySearch)
        setDisplayedImages(filteredByCategory)
    }

    useEffect(()=>{
        if(categories.length === 0){getImageCategoriesList()}
        if(breeds.length === 0){getCatBreedList()}
        if(images.length === 0){getCatImageList()}  
    },[breeds,categories,images,getImageCategoriesList,getCatImageList,getCatBreedList])

    useEffect(() => {
        setSortedImages(images)
    }, [images])
    
    useEffect(() => {
        FilterImages(filetypes,category,searched)
    }, [filetypes,category,searched,sortedImages])

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
            <select name="sort" id="sort" onChange={e=>{sortBreeds(e.target.value)}}>
                <option value="none-none">Not sorting</option>
                <option value="id-asc">Alphabetical order</option>
                <option value="id-dsc">Reversed alphabetical order</option>
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
                    {displayedImages && displayedImages.map(image => {
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