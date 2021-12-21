import React , {Component} from 'react';
import axios from 'axios';
import AllPosts from '../components/AllPosts';
import FullPost from '../components/FullPost';


class Layout extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/1/posts').then(response => {
            this.setState({ posts: response.data });
            console.log(response);
        })
    }
    render () {
    const posts = this.state.posts.map(post => {
            return <AllPosts title={post.title} body={post.body}/>
    });

    return(
        <>
        <section className='grid grid-cols-4'>
            {posts}
        </section>
        
        <FullPost/>

        </>
    )
}
}

export default Layout;