import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  interviews: [], // Stores all interviews
  filters: { date: null, interviewer: "", candidate: "" }, // Filtering state
};

const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {
    addInterview: (state, action) => {
      state.interviews.push(action.payload);
    },
    // editInterview: (state, action) => {
    //   const index = state.interviews.findIndex(
    //     (i) => i.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.interviews[index] = action.payload;
    //   }
    // },
    editInterview: (state, action) => {
      const index = state.interviews.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index !== -1) {
        state.interviews[index] = action.payload;
      }
    },
    deleteInterview: (state, action) => {
      state.interviews = state.interviews.filter(
        (i) => i.id !== action.payload
      );
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { addInterview, editInterview, deleteInterview, setFilters } =
  interviewSlice.actions;
export default interviewSlice.reducer;
