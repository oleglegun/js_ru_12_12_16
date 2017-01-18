import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const ArticleModel = Record({
    "id": null,
    "date": null,
    "title": null,
    "text": null,
    "comments": []
})

const defaultState = arrayToMap(normalizedArticles, ArticleModel)

export default (articlesState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id)
        case ADD_COMMENT:
            // console.log('---', articlesState.get(payload.articleId));
            return articlesState.update(payload.articleId, article => {
                return new ArticleModel({
                    id: article.id,
                    data: article.date,
                    title: article.title,
                    text: article.text,
                    comments: article.comments.concat([payload.id])
                })
            })
            // return articlesState.updateIn([payload.articleId, 'comments'], comment => )
    }

    return articlesState
}