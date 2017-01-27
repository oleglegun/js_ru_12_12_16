import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { loadCommentsRange } from '../AC'

class CommentsPagination extends Component {

    componentDidMount() {
        const { page } = this.props
        this.props.loadCommentsRange(5, (page - 1) * 5)
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
    comments: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired
}

CommentsPagination.defaultProps = {}

const mapStateToProps = (state, ownProps) => {
    const {page} = ownProps
    return {
        comments: mapToArray(state.comments.entities).slice((page - 1) * 5, page * 5)
    }
}

export default connect(mapStateToProps, { loadCommentsRange })(CommentsPagination)
