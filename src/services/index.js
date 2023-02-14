import axios from "axios";


// axios.defaults.withCredentials = true


axios.interceptors.response.use(response => {
    if(response){
        return response;

    }
}, error => {
    if (error.response.status === 401) {
        
    }
    if(error.response.status === 400){
        if(error.response.data.error){
        }else if(error.response.data.message){

        }
    }
    return error;
});



export const postRequest = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
}

export const getRequest = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        return Promise.reject(error.response);
    }
}

export const putRequest = async (url, data) => {
    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        return Promise.reject(error.response.data);
    }
}

export const patchRequest = async (url, data) => {
    try {
        const response = await axios.patch(url, data);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteRequest = async (url, data) => {
    try {
        const response = await axios.delete(url, data);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

