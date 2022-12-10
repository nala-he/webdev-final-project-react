import React, {useEffect} from "react";
import "./index.css";
import IngredientsList from "../spoonacular/ingredients-list";
import DirectionsList from "../spoonacular/directions-list";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeInfoByIdThunk} from "../../services/spoonacular-thunks";
import {Link} from "react-router-dom";

const SpoonacularRecipeItem = ({recipe}) => {
    const {pathname} = useLocation();
    const {currentUser} = useSelector(state => state.usersData);
    const {targetRecipe} = useSelector(state => state.spoonacular);

    const paths = pathname.split('/');
    const rid = paths[5];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(findRecipeInfoByIdThunk(recipe));
    },[])
    
    return (
        <div className="m-3 p-2 wd-recipe-content d-flex flex-column">
            {/* open recipe */}
            <div className="d-flex align-items-center justify-content-end ps-2 pe-2">
                <div className="btn d-block d-xl-none">
                    <Link to={`/search/recipesByIngredients/results/details/${targetRecipe.id}`} className="wd-no-decor">
                        <i className="fa-solid fa-utensils text-dark p-2"></i>
                        <span>Open Recipe</span>
                    </Link>
                </div>
                <div className="btn d-none d-xl-block">
                    <Link to={`/search/recipesByIngredients/results/details/${targetRecipe.id}`} className="wd-no-decor">
                        <i className="fa-solid fa-utensils text-dark p-2"></i>
                        <span className="text-dark">Open Recipe</span>
                    </Link>
                </div>
            </div>

            {/* recipe summary */}
            <div className="m-2 d-flex align-items-center bg-white rounded">
                {/* recipe image */}
                <div className="p-3">
                    <img className="wd-recipe-image img-fluid" src={`${targetRecipe.image}`} alt="avatar"/>
                </div>
                <div className="ms-2 mt-2 w-75 me-2">
                    {/* recipe title */}
                    <span className="text-dark fw-bolder">
                        {recipe.title}
                    </span>

                    <div className="row">
                        {/* used ingredients */}
                        <div className="col">
                            <span className="text-dark d-none d-md-block mt-3">
                                Used Ingredients:
                            </span>
                            <span className="text-dark d-none d-md-block mt-1 mb-0">
                                <ul>
                                    {
                                        targetRecipe.usedIngredients &&
                                        targetRecipe.usedIngredients.map(ingredient =>
                                                                       <li>
                                                                           {ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)}
                                                                       </li>)
                                    }
                                </ul>
                            </span>
                        </div>

                        {/* missed ingredients */}
                        <div className="col">
                            <span className="text-dark d-none d-md-block mt-3">
                                Missed Ingredients:
                            </span>
                            <span className="text-dark d-none d-md-block mt-1 mb-0">
                                <ul>
                                    {
                                        targetRecipe.missedIngredients &&
                                        targetRecipe.missedIngredients.map(ingredient =>
                                                                         <li>
                                                                             {ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)}
                                                                         </li>)
                                    }
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SpoonacularRecipeItem;