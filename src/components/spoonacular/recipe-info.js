import React from "react";
import "./index.css";
import IngredientsList from "./ingredients-list";
import DirectionsList from "./directions-list";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {createSavedSpoonacularRecipeThunk} from "../../services/saved-recipes-thunk";

const RecipeInfo = ({recipe}) => {
    const {pathname} = useLocation();
    const {currentUser} = useSelector(state => state.usersData);
    const paths = pathname.split('/');
    const rid = paths[5];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const saveRecipeClickHandler = () => {
        if (currentUser) {
            const uid = currentUser._id;
            dispatch(createSavedSpoonacularRecipeThunk({uid, rid}))
                .then(navigate(`/users/${uid}/saved-recipes`));
        } else {
            navigate('/login');
        }
    };
    
    return (
        <div className="m-3 wd-border h-100 bg-white">
            {/* dish title and source */}
            <div className="m-4 mb-3 d-flex align-items-center justify-content-center">
                <div className="text-dark text-center">
                    <div className="fs-2 fw-bold text-wrap">
                        {recipe.title}
                    </div>
                    <div className="fs-6 text-wrap mt-2 text-center">
                        <span>Source: </span>
                        <a href={recipe.sourceUrl} className="text-decoration-none text-dark">
                            {recipe.sourceUrl}
                        </a>
                    </div>
                </div>
            </div>

            {/* recipe pic and recipe summary/times */}
            <div className="d-flex align-items-center justify-content-center flex-wrap">
                {/* recipe pic */}
                <div className="m-2">
                    <img src={`${recipe.image}`}
                         className="wd-recipe-pic" alt="recipe image"/>
                </div>
                {/* recipe summary/times */}
                <div className="m-2">
                    <div className="wd-border text-dark wd-width-305">
                        <ul className="mt-3">
                            {
                                recipe.preparationMinutes !== -1 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Prep Time: </span>{recipe.preparationMinutes} mins<br/>
                                </li>
                            }
                            {
                                recipe.cookingMinutes !== -1 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Cook Time: </span>{recipe.cookingMinutes} mins<br/>
                                </li>
                            }
                            {
                                recipe.readyInMinutes !== -1 &&
                                    <li className="list-group-item">
                                        <span className="fw-bold">Total Time: </span>{recipe.readyInMinutes} mins<br/>
                                    </li>
                            }
                            {
                                recipe.servings !== -1 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Servings: </span>{recipe.servings}<br/>
                                </li>
                            }
                            {
                                recipe.cuisines.length !== 0 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Cuisines: </span>{recipe.cuisines.join(', ')}<br/>
                                </li>
                            }
                            {
                                recipe.diets.length !== 0 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Diets: </span>{recipe.diets.join(', ')}<br/>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* ingredients */}
            <div className="row wd-border m-4 mt-3">
                <IngredientsList ingredients={recipe.extendedIngredients}/>
            </div>

            {/* directions */}
            <div className="row wd-border m-4">
                <DirectionsList directions={recipe.analyzedInstructions[0]}/>
            </div>
            {/* save button */}
            <div className="btn text-dark d-flex justify-content-center"
                 onClick={saveRecipeClickHandler}>
                <div>
                    <i className="bi bi-bookmark text-dark p-2"></i>
                    <span className="fw-bold text-dark">Save Recipe</span>
                </div>
            </div>
        </div>
    );
};
export default RecipeInfo;