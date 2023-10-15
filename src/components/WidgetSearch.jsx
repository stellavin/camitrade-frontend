import React from 'react';

const WidgetSearch = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="search-field">
                <form onSubmit={handleSearch}>
                    <input placeholder="search keyword" type="text" name='searching' autoComplete='off' />
                    <button type="submit" className=''><i className="icofont-search-1"></i></button>
                </form>
            </div>
        </>
    );
};

export default WidgetSearch;