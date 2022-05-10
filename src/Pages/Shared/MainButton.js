import React from 'react';

const MainButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-primary my-4 px-10 hover:from-primary hover:to-secondary">{children}</button>
    );
};

export default MainButton;