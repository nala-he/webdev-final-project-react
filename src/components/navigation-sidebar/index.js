import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";
import itemsArray from "./item.json";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import "./index.css";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = (paths[1] !== '') ? paths[1] : 'home';

    return (
            <div className="mt-2 border rounded-3 wd-component-outline">
                {/*Logo and sitename*/}
                <div className="m-2 row row-cols-12">
                        <div className="col-2 d-flex align-items-center justify-content-center">
                            <img src="/images/logo.jpg" className="wd-logo"/>
                        </div>
                        <div className="col-10 d-flex align-items-center justify-content-center">
                            <span className="d-none d-xl-block wd-sitename text-black">
                                RecipeFridge
                            </span>
                            {/*<h6 className="d-none d-xl-block p-3 fw-bold text-black">*/}
                            {/*    RecipeFridge*/}
                            {/*</h6>*/}
                        </div>
                </div>
                {/*Navigation Buttons*/}
                <div className="m-2">
                {
                    itemsArray.map(item => <NavigationSidebarItem
                        key={item._id} item={item} active={active}/>)
                }
                </div>
            </div>
    );
};
export default NavigationSidebar;
