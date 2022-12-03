import {useNavigate, useSelector} from "react-router-dom";
import {React, useState, useEffect} from "react";
import {useDispatch} from "react-redux";

import * as service from "../../services/auth-service";
import {updateProfile} from "../../reducers/profile-reducer";
import Signup from "./signup";

const Login = () => {
    const {currentUser} = useSelector(state => state.usersData);
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const login = () => {
        // const user = await service.login(loginUser)
        //     .catch(e => alert(e));
        // dispatch(updateProfile(user));
        // navigate(`/profile/${user._id}`);
        try {
            dispatch(loginThunk(loginUser))
        } catch (e => alert(e)) 
    };
    
    if (currentUser) {
        navigate(`/profile/${currentUser._id}`);
    }
    
    return (
        <div>
            <Signup/>

            <h1>Login</h1>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setLoginUser({...loginUser, username: e.target.value})}
                   placeholder="username"/>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setLoginUser({...loginUser, password: e.target.value})}
                   placeholder="password" type="password"/>
            <button onClick={login} className="btn btn-primary mb-5">Login</button>
        </div>
    );
};
export default Login;