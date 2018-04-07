export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


export const increment = (value) => {
    return {
        type: INCREMENT,
        value: value,
    };
}

export const decrement = (val) => {
    return {
        type: DECREMENT,
        value: val,
    };
}

export const add = (val) => {
    return {
        type: ADD,
        value: val,
    };
}

export const subtract = (val) => {
    return {
        type: SUBTRACT,
        value: val,
    };
}

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    };
}


export const storeResult = (res) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultEltId: id
    };
}