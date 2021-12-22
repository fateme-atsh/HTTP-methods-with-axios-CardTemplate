import React , {Component} from 'react';
import axios from 'axios';
import AllPosts from '../components/AllPosts';
import FullPost from '../components/FullPost';
import NewPost from '../components/NewPost';

class Layout extends Component {
    state = {
        miniPosts: [],
        selectedPostId: null,
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.setState({ miniPosts: response.data.slice(0, 12) });
            console.log(this.state.miniPosts);
        });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
        console.log(id);
        console.log(this.state.selectedPostId);
    }

    render () {
            const miniPosts = this.state.miniPosts.map(post => {
            return <AllPosts key={post.id} title={post.title} body={post.body} clicked={() => this.postSelectedHandler(post.id)}/>
                });

        return(
        
        <>
        <section className='grid grid-cols-4'>
            {miniPosts}
        </section>

        <FullPost id={this.state.selectedPostId}/>
        
        <NewPost/>
        </>
        )
    }
}

export default Layout;