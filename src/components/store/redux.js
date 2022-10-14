import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import AuthReducer from "./auth";

/* configureStore it's like create store but it's make merging multiple reducers in one reducer easier
redux want one main reducer func no matter if use configure or create store 
in configureStore the value of reducer can be single reducer (reducer: counterSlice.reducer)
if we have multiple state slice we could set object nad in that object we can sey any key of our choice
and the value of reducer can be diff reducer func (map of reducers) >>behind the sense configureStore
will merge all reducers in one big reducer    */

const store = configureStore({
  reducer: { counter: counterReducer, auth: AuthReducer },
});

export default store;
