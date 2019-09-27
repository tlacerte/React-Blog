import React, { Component } from 'react';

class BlogForm extends Component{
    state = {
        title : "",
        content : "",
        user : "",
    }
    handleOnChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }
    render(){
        return (
            <form action="blogform">
                {/* <h1>{this.state.title}</h1> */}
                <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title} />
                <input type="text" name="content" onChange={this.handleOnChange} value={this.state.content} />
                <input type="text" name="user" onChange={this.handleOnChange} value={this.state.user} />
            </form>
        )
    }
}

export default BlogForm