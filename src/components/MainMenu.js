import React from 'react';
import MainImage from "./Header";

const MainMenu = ({ brand }) => {

    const links = [

        { label: "See all dogs", url: "/alldogs" },
        { label: "Add", url: "/adddog"},
        { label: "Update", url: "/updatedog"},
        { label: "Delete", url: "/deletedog"},
        { label: "Log out", url: "/logout"},
    ];





    return (
       <div>



        <div className="list-group">
                {links.map(link => (
                    <button onClick={()=>{window.location.href=link.url} } type="button" className="list-group-item list-group-item-action">{link.label}</button>

                ))}

        </div>

       </div>

    )
}

export default MainMenu;