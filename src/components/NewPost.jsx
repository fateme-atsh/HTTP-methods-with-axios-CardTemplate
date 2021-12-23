import React, { Component } from 'react';
import axios from 'axios';


class NewPost extends Component {

    state = {
        title: "",
        body: "",
    }

    savePostHandler = () =>{
        const newpost = {
            title: this.state.title,
            body: this.state.body,
        }
        axios.post('https://jsonplaceholder.typicode.com/posts/', newpost).then(response => {
            console.log(response);
        });
    }

    render () {
            
            let newpost = (
            
            <section className='grid grid-cols-1 m-10 shadow-xl p-10 text-justify bg-lime-100'>
                <label name='title' className='font-semibold text-lime-800 text-2xl'>Title : </label>
                <input type='text' name='title' value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} className='border-2'/>
                <label name='content' className='font-semibold text-lime-800 text-2xl'>Content : </label>
                <textarea name='content' value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} className='border-2'/>
                <div>
                <input type='submit' value='Cancel' className='bg-rose-700 text-white w-32 border-rose-900 rounded-md py-3 font-bold m-3 hover:bg-rose-800 hover:cursor-pointer'/>
                <input type='submit' value='Save Post' onClick={this.savePostHandler} className='bg-gray-700 text-white w-32 border-rose-900 rounded-md py-3 font-bold hover:bg-gray-800 hover:cursor-pointer'/>
                </div>
            </section>
            
            )

        return newpost;
    
    }
}

export default NewPost;
