
export const API_URL = process.env.REACT_APP_API_BASE_URL;

export const getApplications = `${API_URL}/applications`;
export const getResources = `${API_URL}/resources`;
export const getApplicationsByApplicationName = (applicationname)=>  `${API_URL}/applications/${applicationname}`;
export const getResourcesByResourceName = (resourcename) =>  `${API_URL}/resources/${resourcename}`;



