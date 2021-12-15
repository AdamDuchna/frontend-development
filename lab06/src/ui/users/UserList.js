
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserList } from "../../ducks/users/operations";
import { getAllUsers, getUsers } from "../../ducks/users/selectors";
import {Link} from "react-router-dom";

const UserList = ({ users, getUserList } ,props) => {
    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div>
            <h3>Users list</h3>
            {
                users && users.map(user => {
                    return (
                    <div key={user.id}>
                        <Link to={`/users/${user.id}`} >{user.username}</Link>
                    </div>)
                    })
            }
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        users: getAllUsers(state)
    };
}
const mapDispatchToProps = {
    getUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);