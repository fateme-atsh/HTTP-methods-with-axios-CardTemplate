import React from 'react';

const AllPosts = (props) => {
    return (
        <section className='text-center shadow-lg mx-3 my-5 p-3 hover:hover:cursor-pointer' onClick={props.clicked}>
            <h1 className='text-3xl text-lime-700 font-semibold'>{props.title.slice(0, 10)}...</h1>
            <div className='border m-3 p-10'>
                <p className='text-lime-900'>{props.body.slice(0, 50)}...</p>
            </div>
        </section>
    )
}

export default AllPosts;