import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends React.Component {
    render() {
        const {articles, isOpenItem, toggleOpenItem} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={isOpenItem(article.id)}
                         onClick={toggleOpenItem(article.id)}
                         ref = {this.getArticleRef}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
            </div>
        )
    }

    getArticleRef = (article) => {
        this.article = article
        console.log('---', findDOMNode(article))
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { filters, articles } = state

    const { selectedIds } = filters
    console.log('---', selectedIds);
    const { from, to } = filters.dateRange

    const filteredArticles = articles.filter(article => {
        const publishDate = Date.parse(article.date)
        return (
            (!selectedIds.length || (selectedIds.indexOf(article.id) !== -1))
            &&
            (!from || !to || (publishDate >= from && publishDate <= to))
        )
    })

    return {
        articles: filteredArticles
    }
}

export default connect(mapStateToProps)(accordion(ArticleList))