
import * as React from "react";

/**
 * This file has initial custom hooks to store all the data
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


const Store = React.createContext(null);

Store.displayName = 'Store';

export const StoreProvider = ({ children, initialState, reducer }) => {


  const [globalState, dispatch] = React.useReducer(reducer, initialState);


  return (<Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>);
}

export const useStore = () => {

  const [state, dispatch] = React.useContext(Store);

  const data = state && state.data ? state.data : {};
  const options = state && state.options ? state.options : {};



  return {
    dispatch,
    data,
    options
  }

}
