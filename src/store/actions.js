
import { SET_DATA, SET_OPTIONS } from './constants'


/**
 * This file has all action creators
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


//This will help us to store all the API data
export const setData = (data) => ({
    type: SET_DATA,
    data,
});

// This is used for configurations like which one is selected in the sidemenus
export const setOptions = (options) => ({
    type: SET_OPTIONS,
    options,
});

