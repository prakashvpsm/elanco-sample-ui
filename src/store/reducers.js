import { SET_DATA, SET_OPTIONS } from './constants'

/**
 * This file has reducers which will help us store the data
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


export const initialState = {
    data: {},
    options: {},

};

export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            var exitingData = state.data;
            if(state && action  && action.data.value && action.data.type){
                const newData = action.data.value;
                exitingData[action.data.type] = newData;
            }
            return {
                ...state,
                data: exitingData
            }
        case SET_OPTIONS:
            var exitingData1 = state.options;

            if(action.options.type){
                const temp = action.options.value;
                exitingData1[action.options.type] = temp;
            }
            return {
                ...state,
                options: exitingData1
            }
        default:
            break;
    }
};