import React from "react";

const AllDogs = ({ brand }) => {
    return (
        <div className="dogimage " >

            <img src={process.env.PUBLIC_URL + '/logofull.png'} className="img-fluid" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            {brand}

        </div>

    )
}
export default AllDogs;