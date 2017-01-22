import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (state = defaultState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_COMMENT:
            const { randomId } = action
            return state.set(randomId, new CommentModel({id: randomId, ...payload.comment}))
    }

    return state
}