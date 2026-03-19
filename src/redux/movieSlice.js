import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    myList: []
  },

  reducers: {

    addToList: (state, action) => {

      const exists = state.myList.find(
        movie => movie.id === action.payload.id
      );

      if (!exists) {
        state.myList.push(action.payload);
      }

    },

    removeFromList: (state, action) => {

      state.myList = state.myList.filter(
        movie => movie.id !== action.payload
      );

    }

  }

});

export const { addToList, removeFromList } = movieSlice.actions;

export default movieSlice.reducer;