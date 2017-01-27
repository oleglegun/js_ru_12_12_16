import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import CommentsPagination from '../components/CommentsPagination'

class Comments extends Component {
    render() {
        return (
            <div>
                <Link to="/comments/1" activeStyle={{color: 'red'}}>1</Link>
                <Link to="/comments/2" activeStyle={{color: 'red'}}>2</Link>
                <Link to="/comments/3" activeStyle={{color: 'red'}}>3</Link>
                <Link to="/comments/4" activeStyle={{color: 'red'}}>4</Link>
                <Link to="/comments/5" activeStyle={{color: 'red'}}>5</Link>
                {/*{this.props.children || <CommentsPagination />}*/}
                {this.props.children}
            </div>

        )
    }
}

Comments.propTypes = {}
Comments.defaultProps = {}

export default Comments
