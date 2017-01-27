import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_ALL_COMMENTS, LOAD_COMMENTS_RANGE, START, SUCCESS, FAIL } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const DefaultReducerState = Record({
    error: null,
    entities: new OrderedMap({})
})


export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response.records, CommentModel))

        case LOAD_COMMENTS_RANGE + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response.records, CommentModel))
    }

    return state
}