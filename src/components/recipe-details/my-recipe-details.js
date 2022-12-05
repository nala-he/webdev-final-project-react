import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import RecipeDetail from "./recipe-detail";
import recipes from "../../data/recipes.json";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {createSavedRecipeThunk} from "../../services/saved-recipes-thunk";

const MyRecipeDetails = ({recipe = recipes[0]}) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const rid = paths[3];
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveRecipeClickHandler = () => {
        if (currentUser) {
            dispatch(createSavedRecipeThunk({uid: currentUser._id, rid}));
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="m-3 mb-0 wd-border wd-bg-beige">
            {/* close button */}
            <div className="d-flex justify-content-end m-3 me-4">
                <Link to={`/profile/my-recipes`}>
                    <i className="bi bi-x-square text-black fs-3"></i>
                </Link>

            </div>

            {/* recipe detail */}
            <div>
                {/* hardcode recipe - update later*/}
                <RecipeDetail recipe={recipes[0]}/>
            </div>

            <div className="d-flex justify-content-center">
                {/* save button */}
                <Link to={`/profile/my-recipes`}
                      className="text-decoration-none d-flex align-items-center"
                      onClick={saveRecipeClickHandler}>
                    <i className="bi bi-save2 text-black fs-3"></i>
                    <span className="fw-bold fs-5 ms-3 text-dark">
                        Save Recipe
                    </span>
                </Link>
            </div>
        </div>
    );
};
export default MyRecipeDetails;