import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialAuthState = {
  isAuthenticated: false,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
/* when work with multiple slice you still only have one redux store  */
export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
