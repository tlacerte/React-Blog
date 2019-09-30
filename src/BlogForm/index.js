import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BlogForm.css'

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

    //update state here and pass method down to another component

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleAddPost({...this.state})
    }
    render(){
        return (
            <form action="blogform" className="blog-form" onSubmit={this.handleSubmit}>
                {/* <h1>{this.state.title}</h1> */}
                <div className="post-title-author">
                    <div>
                        <label>Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            onChange={this.handleOnChange} 
                            value={this.state.title} 
                        />
                    </div>
                    <div>
                        <label>Author</label>
                        <input 
                            type="text" 
                            name="user" 
                            onChange={this.handleOnChange} 
                            value={this.state.user} 
                        />
                    </div>
                </div>
                <label>Content</label>
                <textarea 
                    type="text" 
                    name="content" 
                    onChange={this.handleOnChange} 
                    value={this.state.content} 
                />
                <button className="button-primary" onClick={this.props.handleToggle}>close</button>
                <input type="submit" />
            </form>
        )
    }
}

export default BlogForm

BlogForm.propTypes = {
    handleToggle : PropTypes.func,
    handleAddPost : PropTypes.func,
}