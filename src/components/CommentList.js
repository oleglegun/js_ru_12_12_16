//noinspection JSUnresolvedVariable
import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = e => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getButton = () => {
        return (
            <button onClick={ this.toggleOpen }>
                { this.state.isOpen ? 'Hide Comments' : 'Show Comments' }
            </button>
        )
    };

    getBody = () => {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments || !comments.length) return <h4>No Comments</h4>;

        const commentItems = comments.map(comment => <Comment key={ comment.id } comment={ comment }/>);
        return (
            <div>
                <h4>Comments</h4>
                { commentItems }

            </div>
        )
    }
}