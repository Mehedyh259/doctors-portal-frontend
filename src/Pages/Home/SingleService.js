import React from 'react';

const SingleService = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} width={116} height={115} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 60)}...</p>
            </div>
        </div>
    );
};

export default SingleService;