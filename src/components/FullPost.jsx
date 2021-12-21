import React from 'react';

const FullPost = () => {
    return(
        <section className='grid grid-cols-1 m-10 shadow-md p-10 text-center'>
            <h1 className='text-3xl text-lime-700 font-semibold'>Title</h1>
            <div className='border m-3 p-10'>
                <p className='text-lime-900'>Body</p>
            </div>
            <div className='comments'>

            </div>

            <div>
            <input type='submit' value='Delete' className='bg-rose-700 text-white w-32 border-rose-900 rounded-md py-3 font-bold m-3'/>
            <input type='submit' value='Edite' className='bg-gray-700 text-white w-32 border-rose-900 rounded-md py-3 font-bold'/>
            </div>
        </section>
    )
}

export default FullPost;