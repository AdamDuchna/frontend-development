
import { useEffect,useState} from "react";
import { connect } from "react-redux";
import { getCatBreedList } from "../../ducks/breeds/operations";
import { getAllCatBreeds} from "../../ducks/breeds/selectors";
import {Link} from "react-router-dom";
import '../../styling/breeds/CatsBreedsList.css';

const CatsBreedsList = ({ breeds, getCatBreedList } ,props) => {
    const [sortedBreeds, setSortedBreeds] = useState(breeds)
    const [displayedImages, setDisplayedImages] = useState(breeds)


    const [checked, setChecked] = useState([])
    const [searched, setSearched] = useState('')
    const [trait, setTrait] = useState('')
    useEffect(() => {
        if(breeds.length === 0){getCatBreedList()}
    }, [breeds,getCatBreedList]);

    useEffect(()=>{setSortedBreeds(breeds)},[breeds])

    const sortBreeds = (sort) => {
        const fieldTypeList = sort.split("-")
        switch (fieldTypeList[1]){
            default:
            case "dsc":
                setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a[fieldTypeList[0]] !== b[fieldTypeList[0]] ? a[fieldTypeList[0]] > b[fieldTypeList[0]] ? -1 : 1 : 0))
                break;
            case "asc":
                setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a[fieldTypeList[0]] !== b[fieldTypeList[0]] ? a[fieldTypeList[0]] < b[fieldTypeList[0]] ? -1 : 1 : 0))
                break;
            }
    }
    useEffect(() => {
        FilterBreeds(checked,trait,searched)
    }, [checked,trait,searched,sortedBreeds])

    const FilterBreeds=(checked,trait,searched)=>{
        const toFilter = sortedBreeds
        const filteredByTrait = FilterByTrait(trait,toFilter)
        const filteredBySearch = FilterBySearch(searched,filteredByTrait)
        const filteredByChecked = FilterByChecked(checked,filteredBySearch)
        setDisplayedImages(filteredByChecked)
    }

    const FilterByChecked=(checked,breeds)=>{
        if(checked.length !== 0){return breeds.slice(0).filter(breed=>checked.includes(breed.origin))}
        return breeds
    }
    const FilterBySearch=(searched,breeds)=>{
        if(searched.length !== 0){return breeds.slice(0).filter(breed=> breed.name.toLowerCase().search(searched.toLowerCase())!==-1) }
        return breeds
    }
    const FilterByTrait=(trait,breeds)=>{
        if(trait.length !== 0){return breeds.slice(0).filter(breed=>breed[trait]===1)}
        return breeds
    }

    const HandleCheckFilter = (orig)=>{
        if(checked.includes(orig)){setChecked(checked.filter(e=>e!==orig))}
        else{setChecked([...checked,orig])}
    }


    const origins = [ ...new Set(breeds.map(breed=>{ return breed.origin}))]
    return (
        <div>
            <div className="breeds-filters">
                <div className="breeds-filters-box">
                    <input  placeholder="Search for breed..." onChange={e=>setSearched(e.target.value)}></input>
                    <select defaultValue="Select a trait" name="traits" id="traits" onChange={e=>setTrait(e.target.value)}>
                        <option value="" >None</option>
                        <option value="hairless">Hairless</option>
                        <option value="grooming">Requires grooming</option>
                        <option value="hypoallergenic">Hypoallergenic</option>
                        <option value="indoor">Kept indoors</option>
                        <option value="short_legs">Short legged</option>
                        <option value="suppressed_tail">Suppresed tail</option>
                    </select>
                    <select name="sort" id="sort" onChange={e=>sortBreeds(e.target.value)}>
                        <option value="name-asc">Alphabetical order</option>
                        <option value="name-dsc">Reversed alphabetical order</option>
                        <option value="affection_level-asc">Affection ascending</option>
                        <option value="affection_level-dsc">Affection descending</option>
                        <option value="child_friendly-asc">Child friendliness ascending</option>
                        <option value="child_friendly-dsc">Child friendliness descending</option>
                        <option value="dog_friendly-asc">Dog friendliness ascending</option>
                        <option value="dog_friendly-dsc">Dog friendliness descending</option>
                    </select >
                <div className="breeds-fieldname">Origin:</div>
                <div className="breeds-checkboxes">
                    { origins.map(origin=>{
                    return (
                        <div key={origin} className="breeds-checkbox">
                            <input type="checkbox" id={origin} name={origin} onClick={e=>HandleCheckFilter(e.target.name)}/>
                            <label>{origin}</label>
                        </div>
                    )
                })}</div>
                </div>
            </div>
            {
                <div className="breeds-list">
                    <Link to='/breeds/add' style={{ textDecoration: 'none', color: "black" }}>
                    <div key="new-breed" className="breed"><div className="no-image">+</div>
                    <div className="cat-breed">Add a new breed</div></div></Link>
                    {displayedImages && displayedImages.map(breed => {
                    return (
                    <div key={breed.id} className="breed">
                        <Link to={`/breeds/${breed.id}`} style={{ textDecoration: 'none', color: "black" }}>
                        { 'image' in breed ? <><img src={breed.image.url} alt="" ></img>
                        <div className="cat-breed">{breed.name}</div></>:<><div className="no-image">?</div>
                        <div className="cat-breed">{breed.name}</div></>}</Link>
                    </div>)
                    })}
                </div>
            }
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        breeds: getAllCatBreeds(state)
    };
}
const mapDispatchToProps = {
    getCatBreedList
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsBreedsList);