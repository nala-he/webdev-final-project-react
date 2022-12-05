import React from "react";
import {useSelector} from "react-redux";

const SearchByIngredientsResults = () => {
    const {recipes} = useSelector(state => state.spoonacular);

    return (
        <div className="m-3 mb-0 wd-border wd-bg-beige">
            {JSON.stringify(recipes, null, 2)}

        </div>
    );
};
export default SearchByIngredientsResults;