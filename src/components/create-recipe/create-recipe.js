import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import { createRecipe } from "../../reducers/recipes-reducer";
import EditIngredients from "./edit-ingredients";
import EditDirections from "./edit-directions";
import EditNutrients from "./edit-nutrients";

const CreateRecipe = ({profile}) => {
    // hard coded recipe for now- need to change
    const recipe = useSelector(state => state.recipes[0]);

    let [editDish, setDish] = useState(recipe.dishName);
    let [editPhoto,setPhoto] = useState(recipe.recipePic);
    let [editIntro, setIntro] = useState(recipe.intro);
    let [editPrep, setPrep] = useState(recipe.prepTime);
    let [editCookTime, setCookTime] = useState(recipe.cookTime);
    let [editTotalTime, setTotalTime] = useState(recipe.totalTime);
    let [editServings, setServings] = useState(recipe.servings);
    let [editDifficulty, setDifficulty] = useState(recipe.difficulty);
    let [editCalories, setCalories] = useState(recipe.calories);
    let [editFat, setFat] = useState(recipe.fat);
    let [editCarbs, setCarbs] = useState(recipe.carbs);
    let [editProtein, setProtein] = useState(recipe.protein);

    const dispatch = useDispatch();

    const createClickHandler = () => {
        const newRecipe = {
            author: profile.username,
            avatar: profile.avatar,
            dishName: editDish,
            intro: editIntro,
            recipePic: editPhoto,
            prepTime: editPrep,
            cookTime: editCookTime,
            totalTime: editTotalTime,
            servings: editServings,
            difficulty: editDifficulty,
            calories: editCalories,
            fat: editFat,
            carbs: editCarbs,
            protein: editProtein    
        }
        dispatch(createRecipe(newRecipe));
    }

    return (
        <div className="m-3 p-4 wd-border h-100 bg-white">
            {/* author and dish title */}
            <div className="mb-3 align-items-center">
                {/* author avatar */}
                {/* <div>
                    <img src={`/images/${profile.avatar}`}
                         className="wd-author-avatar"/>
                </div> */}
                {/* dish title and author name */}
                <div className="text-dark">
                    <div className="row align-items-center">
                        <label className="col-3 wd-input-label">Dish Name: </label>
                        <input
                            type = "text"
                            id = "dishName"
                            onChange={(e)=>setDish(e.target.value)}
                            className = "col-4 wd-input-text" 
                            value={editDish}>
                        </input>
                    </div>
                    <div className="row align-items-center mt-2">
                        <label className="col-3 wd-input-label">Recipe Intro: </label>
                        <input
                            type = "text"
                            id = "dishName"
                            onChange={(e)=>setIntro(e.target.value)}
                            className = "col-8 wd-input-text" 
                            value={editIntro}>
                        </input>
                    </div>
                    {/* <div className="fs-6 text-wrap">
                        Created By: {profile.username}
                    </div> */}
                </div>
            </div>

            {/* recipe pic and recipe summary/times */}
            <div className="d-flex align-items-center flex-wrap">
                <div className="row">
                    <div className="col-5">
                        {/* recipe pic */}
                        <div className="row">
                            <div>
                                <img src={`/images/${recipe.recipePic}`}
                                className="wd-create-recipe-pic mb-2"/>
                            </div>
                            <input type="file" id="recipePic" className="btn"
                            onChange={(e)=>setPhoto(e.target.files[0].name)}
                            accept="image/jpeg, image/png, image/jpg"></input>
                        </div>
                    </div>
                    <div className="col-7">
                        {/* recipe summary/times */}
                        <div className="wd-border text-dark p-3">
                            <div className="row align-items-center">
                                <label className="col-4 fw-bold">Prep Time: </label>
                                <input
                                    type = "text" id = "prepTime" value={editPrep}
                                    onChange={(e)=>setPrep(e.target.value)}
                                    className = "col-7 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                <label className="col-4 fw-bold">Cook Time: </label>
                                <input
                                    type = "text" id = "cookTime" value={editCookTime}
                                    onChange={(e)=>setCookTime(e.target.value)}
                                    className = "col-7 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                <label className="col-4 fw-bold">Total Time: </label>
                                <input
                                    type = "text" id = "totalTime" value={editTotalTime}
                                    onChange={(e)=>setTotalTime(e.target.value)}
                                    className = "col-7 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                <label className="col-4 fw-bold">Servings: </label>
                                <input
                                    type = "text" id = "servings" value={editServings}
                                    onChange={(e)=>setServings(e.target.value)}
                                    className = "col-7 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                <label className="col-4 fw-bold">Difficulty: </label>
                                <input
                                    type = "text" id = "difficulty" value={editDifficulty}
                                    onChange={(e)=>setDifficulty(e.target.value)}
                                    className = "col-7 wd-input-text">
                                </input>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            
            {/* ingredients */}
            <EditIngredients recipe={recipe}/>
            
            {/* directions */}
            <EditDirections recipe={recipe}/>
            
            <div className="wd-border text-dark mt-3 p-3">
                <div className="row align-items-center">
                    <label className="col-3 fw-bold">Calories: </label>
                    <input
                        type = "text" id = "calories" value={editCalories}
                        onChange={(e)=>setCalories(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
                <div className="row align-items-center">
                    <label className="col-3 fw-bold">Fat: </label>
                    <input
                        type = "text" id = "fat" value={editFat}
                        onChange={(e)=>setFat(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
                <div className="row align-items-center">
                    <label className="col-3 fw-bold">Carbs: </label>
                    <input
                        type = "text" id = "carbs" value={editCarbs}
                        onChange={(e)=>setCarbs(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
                <div className="row align-items-center">
                    <label className="col-3 fw-bold">Protein: </label>
                    <input
                        type = "text" id = "protein" value={editProtein}
                        onChange={(e)=>setProtein(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
            </div>

            {/* Save Recipe & cancel button */}
            <div className="row justify-content-evenly">
                <Link to="/profile/:uid/my-recipes/:rid/details" 
                    onClick={createClickHandler}
                    className="col-3 btn btn-secondary mt-3 me-2">
                    Save Recipe
                </Link>
                <Link to="/profile/:uid/my-recipes/:rid/details" 
                    className="col-3 btn btn-secondary mt-3 me-2">
                    Cancel
                </Link>
            </div>
        </div>
    );
};
export default CreateRecipe;