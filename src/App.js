import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  state = {
    isShowing : true,
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
  handleClick = (event) => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  // render will handle the view
  render (){
    //compose components down here and later we will pull these out
    //TODO: extract to separate components 
    const title = <h1>Confetti Blog</h1>
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <li key={index} className="post">
          <h3 clasName="postTitle">{item.title}</h3>
          <p>{item.content}</p>
          <h6>{item.user}</h6>
        </li>
      )
    })
    return (
      <div className="App container">
          <Nav />
          {this.state.isShowing ? title : null}
          <ul>{composedPosts}</ul>
          <button onClick={this.handleClick}>click me</button>
          <Footer />
      </div>
    );
  }
}

export default App;
