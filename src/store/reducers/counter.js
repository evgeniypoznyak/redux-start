import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {...state, counter: state.counter + action.value}
        case actionTypes.DECREMENT:
            return {...state, counter: state.counter - action.value}
        case actionTypes.ADD:
            return {...state, counter: state.counter + action.value}
        case actionTypes.SUBTRACT:
            return {...state, counter: state.counter - action.value}
        default:
            return state
    }

}


export default counter;