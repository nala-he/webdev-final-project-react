import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
import {updateProfile} from "../../reducers/profile-reducer";
import {signupThunk} from "../../services/auth-thunks";

const Signup = () => {
    const {currentUser} = useSelector(state => state.usersData);
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();
    const signup = () => {
        dispatch(signupThunk(newUser));
        // const user = await service.signup(newUser)
        //     .catch(e => alert(e));
        // dispatch(updateProfile(user));
        // navigate(`/profile/${user._id}`);
    }

    const navigate = useNavigate();
    if (currentUser) {
        navigate(`/profile`);
    }

    return (
        <div className="mt-3">
            <h1>Signup</h1>
            <input className="mb-2 form-control"
                   placeholder="username (required)"
                   onChange={(e) =>
                       setNewUser({...newUser, username: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="password (required)" type="password"
                   onChange={(e) =>
                       setNewUser({...newUser, password: e.target.value})}/>
            <select className="mb-2 form-control wd-edit-input"
                    onChange={(e) => {
                        setNewUser({...newUser, type: e.target.value})}}>
                <option value="REG USER">
                    REG USER</option>
                <option value="RECIPE CREATOR">
                    RECIPE CREATOR</option>
                <option value="PRO CHEF">
                    PRO CHEF</option>
            </select>
            <input className="mb-2 form-control"
                   placeholder="firstname"
                   onChange={(e) =>
                       setNewUser({...newUser, firstName: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="lastname"
                   onChange={(e) =>
                       setNewUser({...newUser, lastName: e.target.value})}/>
            <input className="mb-2 form-control"
                   placeholder="avatar image url"
                   type="url"
                   onChange={(e) =>
                       setNewUser({...newUser, avatar: e.target.value})}/>
            <textarea className="mb-2 form-control"
                   placeholder="bio"
                   onChange={(e) =>
                       setNewUser({...newUser, bio: e.target.value})}/>
            {
                newUser.type === "PRO CHEF" &&
                <input className="mb-2 form-control"
                       placeholder="business website"
                       type="url"
                       onChange={(e) =>
                           setNewUser({...newUser, business: e.target.value})}/>
            }
            <button className="btn btn-primary mb-5"
                    onClick={signup}>
                Signup</button>
        </div>
    );
}
export default Signup;