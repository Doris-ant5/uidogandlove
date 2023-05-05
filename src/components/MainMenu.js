import React from 'react';

const MainMenu = ({ brand }) => {

    const links = [

        { label: "AllDogs", url: "#alldogs" },

    ];





    return (

        <div className="list-group">
            <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                See all dogs
            </button>
            <button type="button" className="list-group-item list-group-item-action">Add</button>
            <button type="button" className="list-group-item list-group-item-action">Update</button>
            <button type="button" className="list-group-item list-group-item-action">Delete</button>
            <button type="button" className="list-group-item2 list-group-item-action" disabled>Log out
            </button>
        </div>

    )
}

export default MainMenu;