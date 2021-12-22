import React from 'react';

const Comments = (props)=> {
return(
    <>
    <span className='font-bold'> {props.name} : </span>
    <span> {props.body} </span> 
    </>
)
}

export default Comments;