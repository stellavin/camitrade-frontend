import React from 'react';
import MainMenu from './MainMenu';
import HeaderTwoTopbar from './HeaderTwoTopbar';

const HeaderTwo = () => {
    return (
        <>
            <header>
                <HeaderTwoTopbar />
                <MainMenu />
            </header>
        </>
    );
};

export default HeaderTwo;