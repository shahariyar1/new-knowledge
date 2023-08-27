import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-around mt-10'>
                <div>
                    <h1>Knowledge Cafe</h1>
                </div>
                <div>
                    <img className='w-10' src="../../../images/circle logo.png" alt="" />
                </div>
            </nav>
        </div>
    );
};

export default Header;