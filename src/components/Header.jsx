import React from 'react';
import HeaderTopbar from './HeaderTopbar';
import MainMenu from './MainMenu';
import GlitterEffect from './GlitterEffect';

const Header = () => {
    return (
        <>
            <GlitterEffect />
            <header>
                <HeaderTopbar />
                <MainMenu />
            </header>
        </>
    );
};

export default Header;