import React, {useEffect,useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import RecipeDetail from "./recipe-detail";
import recipes from "../../data/recipes.json";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {createSavedRecipeThunk} from "../../services/saved-recipes-thunk";
import * as service from "../../services/recipes-service";


const MyRecipeDetails = () => {
   
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    // console.log(paths);
    let rid = paths[3];
    let uid = currentUser._id;
    if (paths.length === 7) {
        rid = paths[5];
        let uid = paths[3];
    }
    // console.log(rid);
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        async function fetchData() {
            console.log(rid);
            const targetRecipe = await service.findRecipeById(rid)
            setRecipe(targetRecipe)
        }
        fetchData();
    },[rid]);

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
                {
                    paths.length !== 7 &&
                    <Link to={`/profile/my-recipes`}>
                        <i className="bi bi-x-square text-black fs-3"></i>
                    </Link>
                }
                {
                    paths.length === 7 &&
                    <Link to={`/friends/profile/${uid}/my-recipes`}>
                        <i className="bi bi-x-square text-black fs-3"></i>
                    </Link>
                }
            </div>

            {/* recipe detail */}
            <div>
                {/* hardcode recipe - update later*/}
                <RecipeDetail recipe={recipe}/>
            </div>

            <div className="d-flex justify-content-center">
                {/* save button */}
                <Link to={`/users/${currentUser._id}/saved-recipes`}
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