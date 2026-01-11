import React from 'react';
import HeaderTopbar from './HeaderTopbar';
import MainMenu from './MainMenu';
import SnowEffect from './SnowEffect';
import GlitterEffect from './GlitterEffect';

const Header = () => {
    return (
        <>
            <SnowEffect />
            <GlitterEffect />
            <header>
                <HeaderTopbar />
                <MainMenu />
            </header>
        </>
    );
};

export default Header;