import { connect } from "react-redux";
import {Link} from "react-router-dom";

const CatList = ({cats},props) => {
    return (
        <div >
            {cats.map(cat => ( <div className="cat" key={cat.id}> 
            <Link to={`/${cat.id}`} style={{ textDecoration: 'none', color: "black" }}>
                <div>{cat.name} {cat.surname}</div>
                </Link>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cats: state.cats
    };
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(CatList);