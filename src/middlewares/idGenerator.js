import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    // const id = Date.now().toString.slice(5)

    if (action.type === ADD_COMMENT) {
        action.payload.id = Date.now() % 10000
        console.log('---', 'idGenerator worked!')
    }

    next(action)
}