import { changeValue } from "../components/other/changeValue"

let SET_DATA = 'SET_DATA'
let CHANGE_VALUE = 'CHANGE_VALUE'

const mapReducer = (state, action) => {
    switch (action.type) {
        /* case CHANGE_VALUE: {
            return {
                ...state,
                inputValue: action.value,
                outputValue: changeValue(action.value, state.keyValue, state.map)
            }
        } */
        case CHANGE_VALUE: {
            return {
                ...state,
                inputValue: action.value,
                outputValue: changeValue(action.value, state.keyValue, state.map)
            }
        }
        case SET_DATA: {
            return {
                ...state,
                map: action.data
            }
            
        }
        default:
            return state
    }
}

export const setMapData = (data) => {
    return {
        type: SET_DATA,
        data
    }
}

export const setValue = (value) => {
    return {
        type: CHANGE_VALUE,
        value
    }
}

export default mapReducer