import React, {useEffect,useState} from "react";
import {findDirectionsForRecipe} from "../../services/recipe-directions-service"
import "./index.css";
import {useLocation} from "react-router-dom";


const DirectionsList = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const rid = paths[2];

    const [directions, setDirections] = useState([])

    useEffect(() => {
        async function fetchData() {
            const target = await findDirectionsForRecipe(rid)
            setDirections(target)
        }
        fetchData();
    },[rid]);

    return(
        <div className="p-3">
            <div className="fw-bold fs-5 text-dark">
                Directions
            </div>
            <ol className="text-dark mt-2">
                {
                    directions.map(direction => 
                    <li>
                        <span>{direction.direction}</span>
                    </li>
                        )
                }
            </ol>
        </div>
    );
};
export default DirectionsList;