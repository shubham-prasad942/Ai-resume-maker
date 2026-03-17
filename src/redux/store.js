import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../redux/slices/menuSlice";
import userReducer from "../redux/slices/userSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
  },
});
export default store;
