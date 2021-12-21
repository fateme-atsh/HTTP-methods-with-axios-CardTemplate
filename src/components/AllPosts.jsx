import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';

const AllPosts = (props) => {
    return (
        <section className='text-center shadow-md m-3 p-3'>
            <h1 className='text-3xl text-lime-700 font-semibold'>{props.title}</h1>
            <div className='border m-3 p-10'>
                <p className='text-lime-900'>{props.body}</p>
            </div>
        </section>
    )
}

export default AllPosts;