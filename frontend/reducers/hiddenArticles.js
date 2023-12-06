import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: "hiddenArticles",
  initialState,
  reducers: {
    hideArticle: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    unhideArticle: (state) => {
      console.log("return articles")
      state.value = []
    }
  },
});

export const { hideArticle, unhideArticle } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
