import React from 'react';

const Header = () => {
    return (
        <div className="dogimage " >

            <img src={process.env.PUBLIC_URL + '/LogotypDog.png'} className="img-fluid" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            

        </div>


    )
}
export default Header;