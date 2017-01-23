import { INCREMENT, DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_COMMENTS,
    START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: { articleId, comment },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticleById(id) {
    return (dispatch, getState) => {
        if (getState().articles.getIn(['entities', id, 'text'])) return null

        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        $.get(`/api/article/${id}`)
            .done(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: { id },
                response
            }))
            .fail(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: { id },
                error
            }))
    }
}

// http://localhost:3001/api/comment?article=56c782f17b4e0ba78c7ad717
// TODO Load comments by Article Id that returns function that will be invoked in middleware
//

export function loadCommentsByArticleId(id) {
    return (dispatch, getState) => {
        // Check if comments are already in Store
        const commentsIds = getState().articles.entities.getIn([id, 'comments']);
        console.log('---')
        // if (commentsIds.includes())
        if (commentsIds.every((idNum) => getState().comments.has(idNum))) return null

        // Start comment loading
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { id }
        })

        $.get(`/api/comment?article=${id}`)
            .done(response => dispatch({
                type: LOAD_COMMENTS + SUCCESS,
                payload: { id },
                response
            }))
            .fail(error => dispatch({
                type: LOAD_COMMENTS + FAIL,
                payload: { id },
                error
            }))
    }
}