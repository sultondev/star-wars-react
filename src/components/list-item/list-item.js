import React from "react";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";
import "./list-item.sass";

const ListItem = (props) => {

    const { data, onItemSelected, loading, error, children} = props;

    const renderItems = (arr) => {
    return arr.map((item)=>{
        const { id } = item; 
        const label = children(item);
        return (
            <li className="item-list__item" 
            key={id}
            onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        )
    })
    } 




    const hasData = !(loading || error)
    const loadSpinner = loading ? <Spinner /> : null
    const errorMessage = error ? <ErrorIndicator /> : null
    const listOfItems = hasData ? renderItems(data) : null
    return (
    <ul className="item-list d-flex">
        { listOfItems }
        { loadSpinner }
        { errorMessage }
    </ul>
  )
}


export default ListItem;
