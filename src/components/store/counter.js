import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
/*createSlice is for slice out global state 
reducers in createSlice is a map of all reducers this slice needs
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      /*here we are allowed to mutate the state,redux toolkit use another package 
        called imgur will detect the code & auto will clone the existing state(
        create a new state object,keep all the state which are not editing & override the state which are editing
        in immutable way ) */
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
/*
export const INCREMENT = "increment";
action.type === INCREMENT

to add new piece of data we need>>go to reducer and add it to all these state snapshot
 which we producing&add it to initialState */
/* you maybe miss up with some identifier or amount of data you manage >> we need yo copy a lot of state
 and keep all  the other state properties and reducer func get longer or state immutability>>we have to sure
 we always return new state snapshot and don't change the the existing state*/
/* redux toolkit: is extra package which making working with redux more convenient and easier  

 const counterReducer = (state = initialCounterState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };

    we still need to set the show counter property there because we are returning 
    the overall state object>>and redux won't merge your changes with the existing state,
    it's instead takes what you return and replaces the existing state with it
    if the user forget or doesn't add all state of the object will be undefined >> 
    and undefined it's will be false value,so we must always
     set the other state when we update apiece of state
     
 the state we return it will not merge with existing state,it's will be override
    state.counter++ why don't use this>>never mutate(change) the existing state>>always override it
    because array and object are reference value in js it's easy to override and change the existing state
    never change the original state this can lead to bugs,unpredictable behavior,and make debugging harder
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
}; */
export const counterActions = counterSlice.actions;
/* here we don't access the reducer method but instead we get method created auto by redux toolkit
 counterSlice.actions.decrement will create action object for us & object have type property with
 unique identifier per action >>auto created behind the sense 
*/
export default counterSlice.reducer;
