import { useSelector, useDispatch } from "react-redux";
//it's good if you want to select a part of ou state management by the store
import classes from "./Counter.module.css";
import { counterActions } from "./store/counter";

const Counter = () => {
  /*change the access from state.counter to state.counter.counter ,because we have multiple slice 
  first counter for slice name and the sec for property name in state*/
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  /*here we must pass a func to know which piece of data we want extract from our store,
  it's will execute by react redux,when use useSelector=>react Redux set up auto a subscription
  and will receive the latest counter auto when ever that data changes in react store
  change ton react store will cause to component to re-execute
  *toy always have the latest state by useSelector& manage subscription behind the scenes  */
  const dispatch = useDispatch(); //will dispatch action against redux store
  const incrementHandler = () => {
    /* dispatch({ type: "increment" });
    //the value of type should be one of identifiers we use in our redux store reducer */
    dispatch(counterActions.increment());
    /*increment is method which when executed create a full action with type set to auto created unique action 
    identifier*/
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    /* dispatch({ type: "increase", amount: 5 });
    must have the same name property in reducer
    it's simple to make actions payloads>>it's just add extra property to action object
    and it's flexible you can change the number,the reducer dynamic>it's extract action payload
    */
    dispatch(counterActions.increase(5));
    /*{type :some unique identifier,payload:10} field name is noy up yo you(payload)>>that's default
    redux toolkit uses here 
    increase(state, action) {
      state.counter = state.counter + action.payload;
    } must change it to action.payload 
       */
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
