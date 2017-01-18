import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const commentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = arrayToMap(normalizedComments, commentModel)

export default (state = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(payload.id, new commentModel({
                id: payload.id,
                user: payload.user,
                text: payload.text
            }))
    }

    return state
}