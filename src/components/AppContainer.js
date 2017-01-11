import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filter from './Filters'
import Counter from './Counter'

function AppContainer(props) {
    return (
        <div>
            <Counter/>
            <UserForm />
            <Filter articles = {props.articles}/>
            <ArticleList/>
        </div>
    )
}

AppContainer.propTypes = {
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(AppContainer)