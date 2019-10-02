import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, post, author, handleDelete, id}) => {
    return (
        <li>
            <h3>{title}</h3>
            <p>{post}</p>
            <h6>{author}</h6>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}

export default Post 

Post.propTypes = {
    title: PropTypes.string,
    post: PropTypes.string,
    author: PropTypes.string,
    handleDelete: PropTypes.func,
    id: PropTypes.string
}