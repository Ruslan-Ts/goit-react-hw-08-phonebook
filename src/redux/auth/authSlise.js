const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { logOut, refreshAuth, signUp, logIn } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(refreshAuth.pending, refreshAuth.rejected), state => {
        state.isRefreshing = !state.isRefreshing;
      })
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
