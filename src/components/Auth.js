import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";

const Auth = () => {
  const dispatch = useDispatch();
  /*we do this to avoid this error => React Hook "useDispatch" is called in function "loginHandler"
   that is neither a React function component nor a custom React Hook function. 
  React component names must start with an uppercase letter. React Hook names must start with the word "use"*/
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
