import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

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
    const navigate = useNavigate();
    let isLoggedIn = true;
    useEffect(() => {
        async function fetchData() {
            try {
                const user = await service.profile();
            } catch (e) {
                isLoggedIn = false;
            }
        }
        fetchData();
    }, []);

    const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }

    return (
        <>
            {
                (item.text === "Logout" && isLoggedIn) &&
                    <button type="button"
                            className={`button mt-2 mb-2 w-100 
                            ${item.link.includes(active) ? 'wd-button-active' : ''}`}
                            onClick={logout}>
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
            }
            {
                (item.text === "Login" && !isLoggedIn) &&
                <Link to={item.link} className={`${item.link.includes(active)
                                                   ? 'active' : ''}`}>
                    {/*Navigation Button Item*/}
                    <button type="button" className={`button mt-2 mb-2 w-100 
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
        }
        {
            (item.link !== "/login" && item.link !== "/logout") &&
            <Link to={item.link} className={`${item.link.includes(active)
                                               ? 'active' : ''}`}>
                {/*Navigation Button Item*/}
                <button type="button" className={`button mt-2 mb-2 w-100 
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
        }
        </>
    );
};
export default NavigationSidebarItem;