import { defaultStyles } from "../constants"
const { storage } = require("../core/utils")

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles
}

function normalize(state) {
    return {
        ...state,
        currentStyles: defaultStyles,
        currentText: '',
    }
}

export const initialState = storage('excel-state')
    ? normalize(storage('excel-state'))
    : defaultState
