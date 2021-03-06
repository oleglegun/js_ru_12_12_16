import React, { Component, PropTypes } from 'react'
import {addComment, loadArticleComments} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import {connect} from 'react-redux'
import LocalizedText from './LocalizedText'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static contextTypes = {
        user: PropTypes.string
    }

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if (isOpen && !this.props.isOpen &&
            !article.loadedComments && !article.loadingComments) loadArticleComments(article.id)
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
            <LocalizedText text={(this.props.isOpen ? 'hide' : 'show')  + ' comments'}/>
        </a>
    }

    getBody() {
        const { comments, article, isOpen, addComment } = this.props
        if (!isOpen) return null
        if (article.loadingComments || !article.loadedComments) return <Loader />
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        if (!comments.length) return <div><p><LocalizedText text="No comments yet"/></p>{form}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <b>User: {this.context.user}</b>
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.article.comments.map(id => storeState.comments.getIn(['entities', id]))
    }
}, { addComment, loadArticleComments },
    null,
    {pure: false}
)(toggleOpen(CommentList))