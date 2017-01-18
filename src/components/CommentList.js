import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import { addComment } from '../AC'

class CommentList extends Component {
    static propTypes = {
        commentsIds: PropTypes.array,
        articleId: PropTypes.string,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={ this.handleAddComment } />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }

    handleAddComment = (state) => {
        console.log('---', 'Adding Comment', state.user, state.text)
        this.props.addComment(null, state.user, state.text, this.props.articleId)
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.commentsIds.map(id => storeState.comments.get(id))
    }
}, { addComment })(toggleOpen(CommentList))