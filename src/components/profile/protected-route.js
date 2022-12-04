import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router";

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.usersData);
    if (currentUser) {
        return (children);
    } else {
        navigate('/login');
    }
}
export default ProtectedRoute