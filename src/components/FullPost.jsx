import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';

class FullPost extends Component {

    state = {
        loadedPost: [],
        comments: [],
    }

    componentDidUpdate() {
        if (this.props.id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then(response => {
            this.setState({ loadedPost: response.data });
            });
        
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`).then(response => {
            this.setState({ comments: response.data });
            });
        }
    }
    editePostHandler = () =>{
        axios.patch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then(response => {
            console.log(response);
        });
    }

    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then(response => {
            this.setState({ loadedPost: response.data });
            console.log(response);
        });
    }

    render () {
            const comments = this.state.comments.map(comment => {
                return <Comments key={comment.id} postId={comment.postId} body={comment.body} name={comment.name}/>
                });
            // const edit = () => <NewPost/>
            
            let post = (
            <section className='grid grid-cols-1 m-10 shadow-xl p-10 text-justify bg-gray-100'>
                
                <span className='font-semibold text-lime-800 text-2xl'>Title : </span>
                <div className='border m-3 px-8 py-3'>
                    <h1 className='text-xl text-lime-700 font-semibold'>{this.state.loadedPost.title}</h1>
                </div>
                <span className='font-semibold text-lime-800 text-2xl'>Content : </span>
                <div className='border m-3 p-8'>
                    <p className='text-lime-900 text-lg'>{this.state.loadedPost.body}</p>
                </div>
                <span className='font-semibold text-lime-800 text-2xl'>comments : </span> 
                <div className='border m-3 p-8 text-lime-900 grid grid-cols-1'> 
                    {comments}
                </div>
                <div>
                <input type='submit' value='Delete Post' onClick={this.deletePostHandler} className='bg-rose-700 text-white w-32 border-rose-900 rounded-md py-3 font-bold m-3 hover:bg-rose-800 hover:cursor-pointer'/>
                <input type='submit' value='Edit Post' className='bg-gray-700 text-white w-32 border-rose-900 rounded-md py-3 font-bold hover:bg-gray-800 hover:cursor-pointer'/>
                </div>
            </section>

            )

        return post;
    
    }
}

export default FullPost;
