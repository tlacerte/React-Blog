import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import BlogForm from './BlogForm'
import Post from './Post/Post'

class App extends Component {
  state = {
    isShowing : false,
    posts : []
  }

  componentDidMount = () => {
    getAll().then(results =>{
      this.setState({
        posts: [...results]
      })
    })
  }
  

  //define all event logic hear
  handleShowForm = (event) => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  handleAddPost = ({ title, author, post }) =>{
    const url = "http://localhost:8000/api/posts"
    const options = {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({title, author, post})
    }

    handleVerbs(url, options).then(results =>{
      
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
          user={item.author}
          content={item.post} 
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

async function getAll(){
  const url = "http://localhost:8000/api/posts"
  const initialFetch = await fetch(url)
  const fetchJSON = await initialFetch.json()
  return await fetchJSON
}

async function handleVerbs(url, options){
  const initialFetch = await fetch(url, options)
  const fetchJSON = await initialFetch.json()
  return await fetchJSON
}