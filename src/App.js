import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import BlogForm from './BlogForm'
import Post from './Post/Post'

class App extends Component {
  state = {
    isShowing : false,
    posts : [
      {
        title : "My first confetti blog",
        content : "i love confetti! it should be everywhere!!!!",
        user : "tlacerte"
      },
      {
        title : "blogs are fun",
        content : "i've learned so much about blogs",
        user : "sarahl"
      }
    ]
  }
  //define all event logic hear
  handleShowForm = (event) => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  handleAddPost = (post) =>{
    this.setState({
        posts: [{...post}, ...this.state.posts]
    })
  }
  
  handleDelete = id => {
    //first copy state and modify it
    let newState = this.state.posts.filter(item => this.state.posts[id] !== item)
    //set state
    this.setState({
      posts : newState
    })
  }

  // render will handle the view
  render (){
    //compose components down here and later we will pull these out
    //TODO: extract to separate components 
    const title = <h1>Confetti Blog</h1>
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <Post 
          key={index} 
          title={item.title}
          user={item.user}
          content={item.content} 
          handleDelete={this.handleDelete}
          id={index}
        />
      )
    })
    return (
      <div className="App container">
          <Nav content="NAV"/>
          <div>{title}</div>
          {this.state.isShowing ? 
            <BlogForm 
              handleAddPost={this.handleAddPost}
              handleToggle={this.handleShowForm}
              /> : 
              <button onClick={this.handleShowForm}>Add Post</button>}
          <ul>{composedPosts}</ul>
          <Footer />
      </div>
    );
  }
}

export default App;
