import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

/* 
central data(state)store:you have one store for all your state for all your entire app
>>but the good thing is no need to manage the entire store all the time
subscription : this method subscribe to store, so when the store changes the store notifies component 
and then the component get the data they need
__
*component never directly manipulate  the store data
reducer func: is responsible for changing(updating) the store data,like take some input and spit out a new output 
*component dispatch actions ,triggers certain actions
actions: it's describe the operation the reducer should perform,so redux forward the action to reducer
>>read the description of operation and then operation execute by reducer<the reducer spit out new state
will replace the existing state in central data store, and when the state that's store updated 
subscribing component are notified so they can update there UI.
___
** npm install redux react-react =>> this package makes connecting react applications to redux store
and reducers ends on very simple,easy to subscribe components to redux store 
*/
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
