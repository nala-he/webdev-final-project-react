import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "../../services/auth-thunks";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.usersData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, [])
    return(children)
}
export default CurrentUser;