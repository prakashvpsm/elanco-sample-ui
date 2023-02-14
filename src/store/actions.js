
import { SET_DATA, SET_OPTIONS } from './constants'


export const setData = (data) => ({
    type: SET_DATA,
    data,
});


export const setOptions = (options) => ({
    type: SET_OPTIONS,
    options,
});

