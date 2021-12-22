import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { delCatAction } from "../ducks/catpackages/actions";

const CatList = ({cats,delCatAction},props) => {
    return (
        <div className='lista'>
            <div>List of gift recievers</div>
            {cats.map(cat => ( <div className="cat" key={cat.id}> 
            <Link to={`/${cat.id}`} style={{ textDecoration: 'none', color: "black" }}>
                <div>{cat.name} {cat.surname}</div>
                </Link>
                <button onClick={() => delCatAction(cat)}>Usuń</button>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cats: state.cats
    };
}

const mapDispatchToProps = {delCatAction}


export default connect(mapStateToProps, mapDispatchToProps)(CatList);