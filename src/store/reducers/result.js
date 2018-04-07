import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    results: [],
}

const result = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: Date.now(),
                    value: action.result
                })
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results
                .filter(result => result.id !== action.resultEltId)
            return {
                ...state,
                results: updatedArray,
            }
        default:
            return state
    }

}


export default result;