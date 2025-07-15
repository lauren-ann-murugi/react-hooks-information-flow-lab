import React from "react";

function Filter({onCategoryChange }){
return (
    <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
            <option value="all">All</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
        </select>
    </div>
)
}

export default Filter;












