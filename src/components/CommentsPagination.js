import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { loadAllComments } from '../AC'

class CommentsPagination extends Component {

    componentWillMount() {
        this.props.loadAllComments()
    }

    render() {
        const elements = this.props.comments.map((comment) => <li key={comment.id}>{comment.text}<b>{comment.user}</b></li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

CommentsPagination.propTypes = {
    comments: PropTypes.array.isRequired
}

CommentsPagination.defaultProps = {}

const mapStateToProps = (state) => {
    return {
        comments: mapToArray(state.comments.entities)
    }
}

export default connect(mapStateToProps, { loadAllComments })(CommentsPagination)
