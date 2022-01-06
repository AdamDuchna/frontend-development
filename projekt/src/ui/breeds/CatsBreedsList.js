
import { useEffect,useState} from "react";
import { connect } from "react-redux";
import { getCatBreedList } from "../../ducks/breeds/operations";
import { getAllCatBreeds} from "../../ducks/breeds/selectors";
import {Link} from "react-router-dom";
import '../../styling/CatsBreedsList.css';

const CatsBreedsList = ({ breeds, getCatBreedList } ,props) => {
    const [sortedBreeds, setSortedBreeds] = useState(breeds)
    const [breedsBySearch, setBreedsBySearch] = useState(breeds)
    const [breedsByTrait, setBreedsByTrait] = useState(breeds)
    const [breedsByOrigin, setbreedsByOrigin] = useState(breeds)

    const [checked, setChecked] = useState([])
    const [sorting, setSorting] = useState('')
    const [searched, setSearched] = useState('')
    const [trait, setTrait] = useState('')
    useEffect(() => {
        if(breeds.length === 0){getCatBreedList()}
    }, [breeds,getCatBreedList]);

    useEffect(()=>{setSortedBreeds(breeds)},[breeds])

    useEffect(()=>{
        if( sorting === 'alphabet_ascending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0))
        }
        if( sorting === 'alphabet_descending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.name !== b.name ? a.name > b.name ? -1 : 1 : 0))
        }
        if( sorting === 'affenction_ascending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.affection_level !== b.affection_level ? a.affection_level < b.affection_level ? -1 : 1 : 0))
        }
        if( sorting === 'affenction_descending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.affection_level !== b.affection_level ? a.affection_level > b.affection_level ? -1 : 1 : 0))
        }
        if( sorting === 'child_friendly_ascending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.child_friendly !== b.child_friendly ? a.child_friendly < b.child_friendly ? -1 : 1 : 0))
        }
        if( sorting === 'child_friendly_descending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.child_friendly !== b.child_friendly ? a.child_friendly > b.child_friendly ? -1 : 1 : 0))
        }
        if( sorting === 'dog_friendly_ascending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.child_friendly !== b.child_friendly ? a.child_friendly < b.child_friendly ? -1 : 1 : 0))
        }
        if( sorting === 'dog_friendly_descending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.dog_friendly !== b.dog_friendly ? a.dog_friendly > b.dog_friendly ? -1 : 1 : 0))
        }
    },[sorting,checked,searched,trait,sortedBreeds])

    useEffect(()=>{
        if(checked.length === 0){ setbreedsByOrigin(sortedBreeds)}
        else{setbreedsByOrigin(sortedBreeds.slice(0).filter(breed=>checked.includes(breed.origin)))}
    },[checked,searched,sorting,trait,sortedBreeds])

    useEffect(()=>{
        if(searched.length === 0){setBreedsBySearch(breedsByOrigin)}
        else{setBreedsBySearch(breedsByOrigin.slice(0).filter(breed=> breed.name.toLowerCase().search(searched.toLowerCase())!==-1))}
    },[checked,searched,sorting,sortedBreeds,breedsByOrigin])

    useEffect(()=>{
        if(trait.length === 0){setBreedsByTrait(breedsBySearch)}
        else{setBreedsByTrait(breedsBySearch.slice(0).filter(breed=>breed[trait]===1))}
    },[checked,trait,searched,sorting,sortedBreeds,breedsByOrigin,breedsBySearch])

    const HandleChangeSearch = (text)=>{setSearched(text)}
    const HandleCheckFilter = (orig)=>{
        if(checked.includes(orig)){setChecked(checked.filter(e=>e!==orig))}
        else{setChecked([...checked,orig])}
    }
    const HandleSelectSort = (selected)=>{setSorting(selected)}
    const HandleSelectTraits = (t)=>{setTrait(t)}

    const origins = [ ...new Set(breeds.map(breed=>{ return breed.origin}))]
    return (
        <div>
            <div className="breeds-filters">
                <div className="breeds-filters-box">
                    <input  placeholder="Search for breed..." onChange={e=>HandleChangeSearch(e.target.value)}></input>
                    <select defaultValue="Select a trait" name="traits" id="traits" onChange={e=>HandleSelectTraits(e.target.value)}>
                        <option value="" >None</option>
                        <option value="hairless">Hairless</option>
                        <option value="grooming">Requires grooming</option>
                        <option value="hypoallergenic">Hypoallergenic</option>
                        <option value="indoor">Kept indoors</option>
                        <option value="short_legs">Short legged</option>
                        <option value="suppressed_tail">Suppresed tail</option>
                    </select>
                    <select name="sort" id="sort" onChange={e=>HandleSelectSort(e.target.value)}>
                        <option value="alphabet_ascending">Alphabetical order</option>
                        <option value="alphabet_descending">Reversed alphabetical order</option>
                        <option value="affenction_ascending">Affection ascending</option>
                        <option value="affenction_descending">Affection descending</option>
                        <option value="child_friendly_ascending">Child friendliness ascending</option>
                        <option value="child_friendly_descending">Child friendliness descending</option>
                        <option value="dog_friendly_ascending">Dog friendliness ascending</option>
                        <option value="dog_friendly_descending">Dog friendliness descending</option>
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
                    <Link to='/breeds/add' style={{ textDecoration: 'none', color: "black" }}><div key="new-breed" className="breed"><div className="no-image">+</div><div className="cat-breed">Add a new breed</div></div></Link>
                    {breedsByTrait && breedsByTrait.map(breed => {
                    return (
                    <div key={breed.id} className="breed">
                        <Link to={`/breeds/${breed.id}`} style={{ textDecoration: 'none', color: "black" }}>{ 'image' in breed ? <><img src={breed.image.url} alt="" ></img><div className="cat-breed">{breed.name}</div></>:<><div className="no-image">?</div><div className="cat-breed">{breed.name}</div></>}</Link>
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