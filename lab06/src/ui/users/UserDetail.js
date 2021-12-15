
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../ducks/users/operations";
import { getOneUser } from "../../ducks/users/selectors";
import { useParams } from 'react-router';

const UserList = ({ user, getUser } ,props) => {
    const {id} = useParams()
    console.log(user)
    useEffect(() => {
        getUser(id);
    }, []);
    return (
        <div>
            {"username" in user ? <>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.name.firstname}</div>
            <div>{user.name.lastname}</div>
            <div>{user.password}</div>
            <div>{user.phone}</div>
            </> : <>Had problems loading the data</>}

        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        user: getOneUser(state)
    };
}
const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);