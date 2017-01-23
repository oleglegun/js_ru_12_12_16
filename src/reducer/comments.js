import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'
// import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

// const defaultState = arrayToMap(normalizedComments, CommentModel)
const defaultState = arrayToMap([], CommentModel)

export default (state = defaultState, action) => {
    const { type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))
        case LOAD_COMMENTS + SUCCESS:
            return state.merge(arrayToMap(response, CommentModel))
    }

    return state
}