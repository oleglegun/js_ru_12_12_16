import { INCREMENT, DELETE_ARTICLE, SET_DATE_RANGE, SET_SELECTION_IDS } from '../constants'

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

export function setDateRange(dateRange) {
    return {
        type: SET_DATE_RANGE,
        payload: { dateRange }
    }
}

export function setSelectionIds(ids) {
    return {
        type: SET_SELECTION_IDS,
        payload: { ids }
    }
}