import { SET_SELECTION_IDS, SET_DATE_RANGE } from '../constants'

const initialState = {
    selectedIds: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {

        case SET_SELECTION_IDS:
            return Object.assign({}, state, {
                selectedIds: payload.ids
            })

        case SET_DATE_RANGE:
            return Object.assign({}, state, {
                dateRange: {
                    from: payload.dateRange.from,
                    to: payload.dateRange.to
                }
            })
        default:
            return state
    }
}