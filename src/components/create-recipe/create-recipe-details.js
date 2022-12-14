import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./index.css";
import EditIngredients from "./edit-ingredients";
import EditDirections from "./edit-directions";
import {useDispatch, useSelector} from "react-redux";
import { updateRecipeThunk, deleteRecipeThunk } from "../../services/recipes-thunk";
import * as service from "../../services/saved-recipes-service";
import {findSavedRecipesByUserThunk} from "../../services/saved-recipes-thunk";

const CreateRecipeDetails = ({recipe}) => {
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const rid = recipe._id;
    let avatar = currentUser.avatar;
    if (currentUser.avatar === undefined) {
        avatar = "/images/emptyAvatar.png"
    }

    let [editDish, setDish] = useState('');
    let [editPhoto,setPhoto] = useState('');
    let [editIntro, setIntro] = useState('');
    let [editPrep, setPrep] = useState('');
    let [editCookTime, setCookTime] = useState('');
    let [editTotalTime, setTotalTime] = useState('');
    let [editServings, setServings] = useState('');
    let [editDifficulty, setDifficulty] = useState('');
    let [editCalories, setCalories] = useState('');
    let [editFat, setFat] = useState('');
    let [editCarbs, setCarbs] = useState('');
    let [editProtein, setProtein] = useState('');
    let [editPrivacy, setPrivacy] = useState('PUBLIC');

    const createClickHandler = () => {
        const newRecipe = {
            authorId: currentUser._id,
            authorName: currentUser.username,
            avatar: avatar,
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
            protein: editProtein,
            privacy: editPrivacy
        }
        dispatch(updateRecipeThunk({rid,newRecipe}));
        setIntro("newIntro");
        navigate("/home");
    }

    const deleteClickHandler = async () => {
        // remove all saved recipes that exist in database associated to recipe to be deleted
        const recipes = await service.findSavedRecipesByRecipe(rid);
        await Promise.all(recipes.map(recipe => service.deleteSavedRecipe(recipe._id)));

        // dispatch saved recipes again to update reducer
        dispatch(findSavedRecipesByUserThunk(currentUser._id));

        // delete recipe
        dispatch(deleteRecipeThunk(rid));
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
                        {/* large */}
                        <label className="col-3 d-none d-xl-block wd-input-label">Dish Name: </label>
                        {/* xs-large */}
                        <label className="col-3 fw-bolder d-xl-none">Dish Name: </label>
                        <input
                            type = "text"
                            id = "dishName"
                            onChange={(e)=>setDish(e.target.value)}
                            className = "col-8 wd-input-text">
                        </input>
                    </div>
                    <div className="row align-items-center mt-2">
                        {/* large */}
                        <label className="col-3 d-none d-xl-block wd-input-label">Recipe Intro: </label>
                        {/* xs-large */}
                        <label className="col-3 fw-bolder d-xl-none">Recipe Intro: </label>
                        <textarea
                            type = "text"
                            id = "intro"
                            maxLength={63}
                            onChange={(e)=>setIntro(e.target.value)}
                            className = "col-8 wd-input-text">
                        </textarea>
                    </div>
                    <div className="row align-items-center mt-2">
                        {/* large */}
                        <label className="col-3 d-none d-xl-block wd-input-label">Privacy: </label>
                        {/* xs-large */}
                        <label className="col-3 fw-bolder d-xl-none">Privacy: </label>
                        <select
                            type = "text"
                            id = "privacy"
                            onChange={(e)=>setPrivacy(e.target.value)}
                            className = "col-8 wd-input-text">
                                <option value="PUBLIC">
                                    PUBLIC</option>
                                <option value="PRIVATE">
                                    PRIVATE</option>
                        </select>
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
                                {/* xs-large */}
                                {
                                    (!recipe.recipePic) &&
                                    <img className="wd-create-recipe-pic-sm mb-2 d-xl-none"
                                        alt="recipePic" src={`/images/emptyRecipe.jpg`}/>
                                }
                                {
                                    recipe.recipePic && recipe.recipePic.includes("http") &&
                                    <img className="wd-create-recipe-pic-sm mb-2 d-xl-none"
                                        src={recipe.recipePic} alt="recipePic"/>
                                }
                                {
                                    recipe.recipePic && !recipe.recipePic.includes("http") &&
                                    <img className="wd-create-recipe-pic-sm mb-2 d-xl-none"
                                        src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                                }
                                {/* xl */}
                                {
                                    (!recipe.recipePic) &&
                                    <img className="d-none d-xl-block wd-create-recipe-pic mb-2"
                                        alt="recipePic" src={`/images/emptyRecipe.jpg`}/>
                                }
                                {
                                    recipe.recipePic && recipe.recipePic.includes("http") &&
                                    <img className="d-none d-xl-block wd-create-recipe-pic mb-2"
                                        src={recipe.recipePic} alt="recipePic"/>
                                }
                                {
                                    recipe.recipePic && !recipe.recipePic.includes("http") &&
                                    <img className="d-none d-xl-block wd-create-recipe-pic mb-2"
                                        src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                                }
                            </div>
                            <input type="text" id="recipePic" placeholder="Enter image url" className="m-3 col-11 wd-pic-input"
                                   onChange={(e)=>setPhoto(e.target.value)}>    
                            </input>
                        </div>
                    </div>
                    <div className="col-7">
                        {/* recipe summary/times */}
                        <div className="wd-border text-dark p-3">
                            <div className="row align-items-center">
                                {/* xs-large */}
                                <label className="col-6 wd-sm-txt d-xl-none">Prep Time: </label>
                                {/* xl */}
                                <label className="col-6 fw-bold d-none d-xl-block">Prep Time: </label>
                                <input
                                    type = "text" id = "prepTime"
                                    onChange={(e)=>setPrep(e.target.value)}
                                    className = "col-5 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                {/* xs-large */}
                                <label className="col-6 wd-sm-txt d-xl-none">Cook Time: </label>
                                {/* xl */}
                                <label className="col-6 fw-bold d-none d-xl-block">Cook Time: </label>
                                <input
                                    type = "text" id = "cookTime"
                                    onChange={(e)=>setCookTime(e.target.value)}
                                    className = "col-5 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                {/* xs-large */}
                                <label className="col-6 wd-sm-txt d-xl-none">Total Time: </label>
                                {/* xl */}
                                <label className="col-6 fw-bold d-none d-xl-block">Total Time: </label>
                                <input
                                    type = "text" id = "totalTime"
                                    onChange={(e)=>setTotalTime(e.target.value)}
                                    className = "col-5 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                {/* xs-large */}
                                <label className="col-6 wd-sm-txt d-xl-none">Servings: </label>
                                {/* xl */}
                                <label className="col-6 fw-bold d-none d-xl-block">Servings: </label>
                                <input
                                    type = "text" id = "servings"
                                    onChange={(e)=>setServings(e.target.value)}
                                    className = "col-5 wd-input-text">
                                </input>
                            </div>
                            <div className="row align-items-center">
                                {/* xs-large */}
                                <label className="col-6 wd-sm-txt d-xl-none">Difficulty: </label>
                                {/* xl */}
                                <label className="col-6 fw-bold d-none d-xl-block">Difficulty: </label>
                                <input
                                    type = "text" id = "difficulty"
                                    onChange={(e)=>setDifficulty(e.target.value)}
                                    className = "col-5 wd-input-text">
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
                        type = "text" id = "calories"
                        onChange={(e)=>setCalories(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
                <div className="row align-items-center">
                    <label className="col-3 fw-bold">Fat: </label>
                    <input
                        type = "text" id = "fat"
                        onChange={(e)=>setFat(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
                <div className="row align-items-center">
                    <label className="col-3 fw-bold">Carbs: </label>
                    <input
                        type = "text" id = "carbs"
                        onChange={(e)=>setCarbs(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
                <div className="row align-items-center">
                    <label className="col-3 fw-bold">Protein: </label>
                    <input
                        type = "text" id = "protein"
                        onChange={(e)=>setProtein(e.target.value)}
                        className = "col-5 wd-input-text">
                    </input>
                </div>
            </div>

            {/* Save Recipe & cancel button */}
            <div className="row justify-content-evenly">
                <button
                    onClick={createClickHandler}
                    className="col-3 btn btn-sm btn-secondary mt-3 me-2">
                    Save Recipe
                </button>
                <Link to="/home"
                      onClick={deleteClickHandler}
                      className="col-3 btn btn-sm btn-secondary mt-3 me-2">
                    Cancel
                </Link>
            </div>
        </div>
    );
};
export default CreateRecipeDetails;