/**
 * This function will get logged in status. Since we do not have the auth module. pls ignore this file
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    // const decryptedData = decryptData(token);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
};


