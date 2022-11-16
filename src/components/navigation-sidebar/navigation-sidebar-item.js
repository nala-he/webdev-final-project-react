import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebarItem = (
    {
        active,
        item = {
            "_id": 123,
            "icon": "bi bi-house-door-fill",
            "text": "Home",
            "link": "/home"
        }
    }
) => {
    return (
        <Link to={item.link} className={`${item.link.includes(active) 
                                           ? 'active' : ''}`}>
            <button type="button" className={`button mt-1 mb-1 w-100
            ${item.link.includes(active) ? 'wd-button-active' : ''}`}>
                <div className="row row-cols-12">
                    <div className="col-2 d-flex align-items-center">
                        <i className={`${item.icon}`}> </i>
                    </div>
                    <div className="col-10 d-flex align-items-start">
                        <span className="d-none d-xl-block wd-text-size">{item.text}</span>
                    </div>
                </div>
            </button>
        </Link>
    );
};
export default NavigationSidebarItem;