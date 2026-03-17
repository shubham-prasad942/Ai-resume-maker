import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
