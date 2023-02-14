import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { StoreProvider } from "./store";
import { initialState, storeReducer } from "./store/reducers";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={storeReducer}>
      <App />
    </StoreProvider>

  </React.StrictMode>
);

