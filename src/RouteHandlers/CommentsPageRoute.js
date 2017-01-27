import React, {Component, PropTypes} from 'react'
import CommentsPage from '../components/CommentsPage'

class CommentsPageRoute extends Component {

    render() {
        return (
        <CommentsPage page={this.props.params.page} key={this.props.params.page}/>
        )
    }
}

CommentsPageRoute.defaultProps = {}

export default CommentsPageRoute
