import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { createRecipeThunk, deleteInvalidRecipesThunk } from "../../services/recipes-thunk";

const NavigationSidebarItem = (
    {
        active,
        item = {
            "_id": 123,
            "icon": "bi bi-house-door-fill",
            "text": "Home",
            "link": "/home",
            "click": "handler"
        }
    }
) => {
    const dispatch = useDispatch();

    // hard coded user for now
    const uid = "638624452cf03e49f0977570";

    const createRecipeHandler = () => {
        dispatch(createRecipeThunk({uid}));
    }

    const deleteInvalidRecipesHandler = () => {
        dispatch(deleteInvalidRecipesThunk());
    }

    return (
        <Link to={item.link} className={`${item.link.includes(active) 
                                           ? 'active' : ''}`}>
            {/*Navigation Button Item*/}
            <button type="button" onClick={item.click} className={`button mt-2 mb-2 w-100
            ${item.link.includes(active) ? 'wd-button-active' : ''}`}>
                <div className="row row-cols-12 pt-1 pb-1">
                    <div className="col-2 d-flex align-items-center">
                        <i className={`${item.icon}`}> </i>
                    </div>
                    <div className="col-10 d-flex align-items-start">
                        <div className="d-none d-xl-block d-xxl-none">
                            <span className="wd-text-size-small">{item.text}</span>
                        </div>
                        <div className="d-none d-xxl-block">
                            <span className="wd-text-size">{item.text}</span>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
    );
};
export default NavigationSidebarItem;