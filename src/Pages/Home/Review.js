import React from 'react';

const Review = ({ review }) => {
    const { name, img, description, address } = review;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex items-center mt-5'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img className='w-16' src={img} alt='..' />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{name}</h4>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;