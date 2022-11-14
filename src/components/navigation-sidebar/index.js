import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";
import itemsArray from "./item.json";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = (paths.length > 2 && paths[2] !== '') ? paths[2] : 'home';
    active = active.includes('profile') ? 'profile' : active;

    return (
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <div className="d-block d-sm-none d-lg-block d-xl-none">
                        <span className="small ps-0">Tuiter</span>
                    </div>
                    <div className="d-none d-sm-block d-lg-none d-xl-block">
                        <span>Tuiter</span>
                    </div>
                </a>
                {
                    itemsArray.map(item => <NavigationSidebarItem
                        key={item._id} item={item} active={active}/>)
                }
            </div>
            <div className="d-grid mt-2">
                <Link to="/tuiter/tweet"
                      className="btn btn-primary btn-block rounded-pill">Tweet</Link>
            </div>
        </>
    );
};
export default NavigationSidebar;
