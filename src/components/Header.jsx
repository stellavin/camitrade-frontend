import React from 'react';
import HeaderTopbar from './HeaderTopbar';
import MainMenu from './MainMenu';

const Header = () => {
    return (
        <>
            <header>
                <HeaderTopbar />
                <MainMenu />
            </header>
        </>
    );
};

export default Header;