import React from 'react';

const MainButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-primary my-5">{children}</button>
    );
};

export default MainButton;