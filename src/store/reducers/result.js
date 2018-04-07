import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    results: [],
}

const deleteResult = (state, action) => {
    const updatedArray = state.results
        .filter(result => result.id !== action.resultEltId)
    return updateObject(state, {results: updatedArray,})
}

const result = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: Date.now(), value: action.result})})
        case actionTypes.DELETE_RESULT:

            return deleteResult(state, action)
        default:
            return state
    }

}


export default result;