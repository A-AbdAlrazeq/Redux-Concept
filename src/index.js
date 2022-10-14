import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components/store/redux";
import "./index.css";
import App from "./App";

/* Provider is component >>So we wrap it with our root comp
you don't need to use provider on highest component level,you can wrap nested component with provider
but only warped comp and child comp and child comp of child comp only this will have access to redux 
if your entire app need access to store you should provide on highest level
we must set store props and pass the value of store,now our component and their child have access to 
store and can get data from store,they can get subscription to data to be precise,and also they can 
dispatch actions   */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
