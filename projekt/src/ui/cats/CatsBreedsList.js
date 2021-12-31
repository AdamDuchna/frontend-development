
import { useEffect,useState} from "react";
import { connect } from "react-redux";
import { getCatBreedList } from "../../ducks/cats/operations";
import { getAllCatBreeds} from "../../ducks/cats/selectors";
import {Link} from "react-router-dom";
import '../../styling/CatsBreedsList.css';

const CatsBreedsList = ({ breeds, getCatBreedList } ,props) => {
    const [sortedBreeds, setSortedBreeds] = useState(breeds)
    const [breedsBySearch, setBreedsBySearch] = useState(breeds)
    const [breedsByOrigin, setbreedsByOrigin] = useState(breeds)

    const [checked, setChecked] = useState([])
    const [sorting, setSorting] = useState('')
    const [searched, setSearched] = useState('')
    useEffect(() => {
        getCatBreedList();
    }, []);

    useEffect(()=>{
        if( sorting === 'alphabet_ascending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0))
        }
        if( sorting === 'alphabet_descending'){
            setSortedBreeds(sortedBreeds.slice(0).sort((a, b) => a.name !== b.name ? a.name > b.name ? -1 : 1 : 0))
        }
    },[sorting,checked,searched])

    useEffect(()=>{
        if(checked.length == 0){ setbreedsByOrigin(sortedBreeds)}
        else{setbreedsByOrigin(sortedBreeds.slice(0).filter(breed=>checked.includes(breed.origin)))}
    },[checked,searched,sorting,sortedBreeds])

    useEffect(()=>{
        if(searched.length==0 && checked.length==0){setBreedsBySearch(sortedBreeds)}
        else if(searched.length==0){setBreedsBySearch(breedsByOrigin)}
        else if(checked.length==0){setBreedsBySearch(sortedBreeds.slice(0).filter(breed=> breed.name.search(searched)!=-1))}
        else{setBreedsBySearch(breedsByOrigin.slice(0).filter(breed=> breed.name.search(searched)!=-1))}
    },[checked,searched,sorting,sortedBreeds,breedsByOrigin])

    useEffect(()=>{setSortedBreeds(breeds)},[breeds])

    const HandleChangeSearch = (text)=>{setSearched(text)}
    const HandleCheckFilter = (orig)=>{
        if(checked.includes(orig)){setChecked(checked.filter(e=>e!=orig))}
        else{setChecked([...checked,orig])}
    }
    const HandleSelectSort = (selected)=>{setSorting(selected)}

    const origins = [ ...new Set(breeds.map(breed=>{ return breed.origin}))]
    return (
        <div>
            <div className="breeds-filters">
                <div className="breeds-box">
                    <input  placeholder="Search for breed..." onChange={e=>HandleChangeSearch(e.target.value)}></input>
                    <select name="sort" id="sort" onChange={e=>HandleSelectSort(e.target.value)}>
                    <option value="alphabet_ascending">Alphabetical order</option>
                    <option value="alphabet_descending">Reversed alphabetical order</option>
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
                <div className="breeds-list">{breedsBySearch && breedsBySearch.map(breed => {
                    return (
                    <div key={breed.id} className="breed">
                        <Link to={`/breeds/${breed.id}`} style={{ textDecoration: 'none', color: "black" }}>{ 'image' in breed ? <><img src={breed.image.url} ></img><div className="cat-breed">{breed.name}</div></>:<><div className="no-image">?</div><div className="cat-breed">{breed.name}</div></>}</Link>
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