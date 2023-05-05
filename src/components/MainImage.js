import React from 'react';

const Header = ({ brand }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" >

            <img src={process.env.PUBLIC_URL + '/logofull.png'} className="img-fluid" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            {brand}

        </div>


    )
}
export default Header;