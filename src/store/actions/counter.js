import * as actionTypes from "./actionsTypes";

export const increment = (value) => {
    return {
        type: actionTypes.INCREMENT,
        value: value,
    };
}

export const decrement = (val) => {
    return {
        type: actionTypes.DECREMENT,
        value: val,
    };
}

export const add = (val) => {
    return {
        type: actionTypes.ADD,
        value: val,
    };
}

export const subtract = (val) => {
    return {
        type: actionTypes.SUBTRACT,
        value: val,
    };
}