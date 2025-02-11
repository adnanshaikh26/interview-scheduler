import { configureStore } from "@reduxjs/toolkit";
import interviewReducer from "./features/interviewSlice";

export const store = configureStore({
  reducer: {
    interview: interviewReducer,
  },
});

export default store;
