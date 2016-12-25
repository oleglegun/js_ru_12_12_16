import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends React.Component {
    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={openArticleId == article.id}
                         onClick={toggleOpenArticle(article.id)}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default toggleOpenArticle(ArticleList);