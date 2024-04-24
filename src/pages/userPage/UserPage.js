import React from 'react';
import Card from "../../components/Card";
import {useDispatch,useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";


const UserPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.userReducer.users)
    const getUsers =()=> {
        dispatch(fetchUsersAction())
    }
    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <div className='blackJack'>
                {users.map((user) => <Card cardInfo={user}/>)}
            </div>
        </div>
    );
};
export default UserPage;