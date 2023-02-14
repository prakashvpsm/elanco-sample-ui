
import * as React from "react";

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
