import React, {PropTypes}  from 'react'

function Comment(props) {
    const {comment: {text, user}} = props
    return (
        <div>
            {text} <b>{user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment